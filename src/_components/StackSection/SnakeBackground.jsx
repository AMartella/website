'use client';

import { useEffect, useRef } from "react";

function SnakeBackground({ speed = 3, length = 100, color_1 = "#000", color_2 = "#fff", initalDirection = { x: 1, y: 0 } }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const sectionHeight = document.querySelector('#stack-section').offsetHeight;
        canvas.width = window.innerWidth;
        canvas.height = sectionHeight ? sectionHeight - 150 : window.innerHeight;
        const margin = 50;

        let headPos = { x: (canvas.width - margin) / 2, y: (canvas.height - margin) / 2 };
        let direction = initalDirection;
        let snake = [{ ...headPos }];
        const dirs = [
            { x: 1, y: 0 }, { x: -1, y: 0 },
            { x: 0, y: 1 }, { x: 0, y: -1 }
        ];
        let changeCooldown = 0;
        function step() {
            // Aggiorna direzione randomica con cooldown
            if (changeCooldown > 0) changeCooldown--;
            else if (Math.random() < 0.004) {
                const newDir = dirs.filter(dir => dir.x !== direction.x && dir.y !== direction.y);
                direction = newDir[Math.floor(Math.random() * newDir.length)];
                changeCooldown = 30; // pausa di 60 frame prima del prossimo cambio
            }

            // Movimento fluido in pixel
            headPos.x += direction.x * speed;
            headPos.y += direction.y * speed;

            // Collisione con i bordi → cambio direzione ortogonale senza clamp drastico
            if (headPos.x <= margin || headPos.x >= canvas.width - margin) {
                if (direction.x !== 0) {
                    direction = Math.random() > 0.5 ? { x: 0, y: 1 } : { x: 0, y: -1 };
                    changeCooldown = 30;
                }
                headPos.x = Math.min(Math.max(headPos.x, margin), canvas.width - margin);
            }

            if (headPos.y <= margin || headPos.y >= canvas.height - margin) {
                if (direction.y !== 0) {
                    direction = Math.random() > 0.5 ? { x: 1, y: 0 } : { x: -1, y: 0 };
                    changeCooldown = 30;
                }
                headPos.y = Math.min(Math.max(headPos.y, margin), canvas.height - margin);
            }

            snake.unshift({ ...headPos });
            if (snake.length > length) snake.pop();

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (snake.length > 2) {
                ctx.beginPath();
                ctx.moveTo(snake[0].x, snake[0].y);

                for (let i = 1; i < snake.length - 2; i++) {
                    const dx = snake[i + 1].x - snake[i].x;
                    const dy = snake[i + 1].y - snake[i].y;

                    // Salta segmenti troppo distanti per evitare loop strani
                    if (Math.abs(dx) > canvas.width / 2 || Math.abs(dy) > canvas.height / 2) continue;

                    const xc = (snake[i].x + snake[i + 1].x) / 2;
                    const yc = (snake[i].y + snake[i + 1].y) / 2;
                    ctx.quadraticCurveTo(snake[i].x, snake[i].y, xc, yc);
                }

                const last = snake.length - 1;
                ctx.quadraticCurveTo(snake[last - 1].x, snake[last - 1].y, snake[last].x, snake[last].y);

                // Gradiente sopra
                const grad = ctx.createLinearGradient(snake[0].x, snake[0].y, snake[last].x, snake[last].y);
                grad.addColorStop(0, color_1);
                grad.addColorStop(1, color_2);

                ctx.strokeStyle = grad;
                ctx.lineWidth = 10;
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.stroke();
            }

            requestAnimationFrame(step);
        }

        step();
    }, [speed, length]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}

export default SnakeBackground;
