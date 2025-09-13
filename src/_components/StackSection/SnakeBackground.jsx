'use client';

import { useEffect, useRef } from "react";

function SnakeBackground({ speed = 3, length = 100, color_1 = "#000", color_2 = "#fff", coords = [] }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const sectionHeight = document.querySelector('#stack-section').offsetHeight;
        canvas.width = window.innerWidth;
        canvas.height = sectionHeight - 150;

        let headPos = { x: (canvas.width - coords[0]) / 2, y: (canvas.height - coords[1]) / 2 };
        let direction = { x: 1, y: 0 };
        let snake = [{ ...headPos }];

        function step() {
            // Aggiorna direzione randomica
            if (Math.random() < 0.02) {
                const dirs = [
                    { x: 1, y: 0 }, { x: -1, y: 0 },
                    { x: 0, y: 1 }, { x: 0, y: -1 }
                ];
                direction = dirs[Math.floor(Math.random() * dirs.length)];
            }

            // Movimento fluido in pixel
            headPos.x += direction.x * speed;
            headPos.y += direction.y * speed;

            // Collisione con i bordi → cambio direzione ortogonale
            if (headPos.x <= 0 || headPos.x >= canvas.width) {
                // se stava andando in orizzontale, scegli su o giù
                direction = Math.random() > 0.5 ? { x: 0, y: 1 } : { x: 0, y: -1 };
                headPos.x = Math.max(0, Math.min(canvas.width, headPos.x));
            }

            if (headPos.y <= 0 || headPos.y >= canvas.height) {
                // se stava andando in verticale, scegli destra o sinistra
                direction = Math.random() > 0.5 ? { x: 1, y: 0 } : { x: -1, y: 0 };
                headPos.y = Math.max(0, Math.min(canvas.height, headPos.y));
            }



            snake.unshift({ ...headPos });
            if (snake.length > length) snake.pop();

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (snake.length > 2) {
                ctx.beginPath();
                ctx.moveTo(snake[0].x, snake[0].y);

                // Usa quadraticCurveTo per la coda
                for (let i = 1; i < snake.length - 2; i++) {
                    const dx = snake[i + 1].x - snake[i].x;
                    const dy = snake[i + 1].y - snake[i].y;

                    // Se la distanza è troppo grande (es. > metà del canvas), salta questo segmento
                    if (Math.abs(dx) > canvas.width / 2 || Math.abs(dy) > canvas.height / 2) continue;

                    const xc = (snake[i].x + snake[i + 1].x) / 2;
                    const yc = (snake[i].y + snake[i + 1].y) / 2;
                    ctx.quadraticCurveTo(snake[i].x, snake[i].y, xc, yc);
                }


                const last = snake.length - 1;
                ctx.quadraticCurveTo(snake[last - 1].x, snake[last - 1].y, snake[last].x, snake[last].y);

                // Gradiente lungo la coda
                const grad = ctx.createLinearGradient(
                    snake[0].x, snake[0].y,
                    snake[snake.length - 1].x, snake[snake.length - 1].y
                );
                grad.addColorStop(0, color_1);
                grad.addColorStop(1, color_2);

                ctx.strokeStyle = grad;
                ctx.lineWidth = 5;
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
