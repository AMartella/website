'use client';

import { useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import Medium from '../Text/Medium/Medium';

export default function BlackHole({ className = "", targetSectionId, onFinish }) {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const centerHoverRef = useRef(null);
    const animationRef = useRef(null);
    const starsRef = useRef([]);
    const stateRef = useRef({
        collapse: false,
        expanse: false,
        returning: false,
        startTime: 0,
        currentTime: 0
    });

    useEffect(() => {
        if (!containerRef.current || !centerHoverRef.current) return;

        const container = containerRef.current;
        const centerHover = centerHoverRef.current;
        const h = container.offsetHeight;
        const w = container.offsetWidth;
        const cw = w;
        const ch = h;
        const maxorbit = 255;
        const centery = ch / 2;
        const centerx = cw / 2;

        stateRef.current.startTime = new Date().getTime();
        starsRef.current = [];

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;
        canvas.className = 'absolute inset-0 z-10 w-full h-full';
        container.appendChild(canvas);
        canvasRef.current = canvas;

        const context = canvas.getContext("2d");
        context.globalCompositeOperation = "multiply";

        function setDPI(canvas, dpi) {
            if (!canvas.style.width) canvas.style.width = canvas.width + 'px';
            if (!canvas.style.height) canvas.style.height = canvas.height + 'px';
            const scaleFactor = dpi / 96;
            canvas.width = Math.ceil(canvas.width * scaleFactor);
            canvas.height = Math.ceil(canvas.height * scaleFactor);
            const ctx = canvas.getContext('2d');
            ctx.scale(scaleFactor, scaleFactor);
        }

        function rotate(cx, cy, x, y, angle) {
            const radians = angle;
            const cos = Math.cos(radians);
            const sin = Math.sin(radians);
            const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
            const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
            return [nx, ny];
        }

        setDPI(canvas, 192);

        class Star {
            constructor() {
                const rands = [Math.random() * (maxorbit / 2) + 1, Math.random() * (maxorbit / 2) + maxorbit];
                this.orbital = (rands[0] + rands[1]) / 2;
                this.x = centerx;
                this.y = centery + this.orbital;
                this.yOrigin = centery + this.orbital;
                this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
                this.rotation = 0;
                this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;
                this.id = starsRef.current.length;
                this.collapseBonus = Math.max(this.orbital - (maxorbit * 0.7), 0);
                this.color = `rgba(0,191,255,${1 - (this.orbital / 255)})`;
                this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus;
                this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
                this.prevR = this.startRotation;
                this.prevX = this.x;
                this.prevY = this.y;
                this.originalY = this.yOrigin;
                starsRef.current.push(this);
            }

            draw() {
                const { collapse, expanse, returning, currentTime } = stateRef.current;

                if (!expanse && !returning) {
                    this.rotation = this.startRotation + (currentTime * this.speed);
                    if (!collapse) {
                        if (this.y > this.yOrigin) this.y -= 2.5;
                        if (this.y < this.yOrigin - 4) this.y += (this.yOrigin - this.y) / 10;
                    } else {
                        if (this.y > this.hoverPos) this.y -= (this.hoverPos - this.y) / -5;
                        if (this.y < this.hoverPos - 4) this.y += 2.5;
                    }
                } else if (expanse && !returning) {
                    this.rotation = this.startRotation + (currentTime * (this.speed / 2));
                    if (this.y > this.expansePos) this.y -= Math.floor(this.expansePos - this.y) / -80;
                } else if (returning) {
                    this.rotation = this.startRotation + (currentTime * this.speed);
                    if (Math.abs(this.y - this.originalY) > 2) this.y += (this.originalY - this.y) / 50;
                    else this.y = this.originalY;
                }

                context.save();
                context.fillStyle = this.color;
                context.strokeStyle = this.color;
                context.beginPath();
                const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
                context.moveTo(oldPos[0], oldPos[1]);
                context.translate(centerx, centery);
                context.rotate(this.rotation);
                context.translate(-centerx, -centery);
                context.lineTo(this.x, this.y);
                context.stroke();
                context.restore();

                this.prevR = this.rotation;
                this.prevX = this.x;
                this.prevY = this.y;
            }
        }

        // Event handlers
        const handleClick = (e) => {
            stateRef.current.collapse = false;
            stateRef.current.expanse = true;
            stateRef.current.returning = false;
            centerHover.classList.add('opacity-0', 'pointer-events-none');

            // rimozione dopo 2.0 secondi
            setTimeout(() => {
                if (onFinish) onFinish();
            }, 2100);

            setTimeout(() => {
                stateRef.current.expanse = false;
                stateRef.current.returning = true;
                setTimeout(() => {
                    stateRef.current.returning = false;
                    centerHover.classList.remove('opacity-0', 'pointer-events-none');
                }, 8000);
            }, 25000);
        };

        const handleMouseOver = () => { if (!stateRef.current.expanse) stateRef.current.collapse = true; };
        const handleMouseOut = () => { if (!stateRef.current.expanse) stateRef.current.collapse = false; };

        centerHover.addEventListener('click', handleClick);
        centerHover.addEventListener('mouseover', handleMouseOver);
        centerHover.addEventListener('focusin', handleMouseOver);
        centerHover.addEventListener('mouseout', handleMouseOut);
        centerHover.addEventListener('focusout', handleMouseOut);

        // Animation loop
        function loop() {
            const now = new Date().getTime();
            stateRef.current.currentTime = (now - stateRef.current.startTime) / 50;

            context.fillStyle = 'rgba(25,25,25,0.2)';
            context.fillRect(0, 0, cw, ch);

            starsRef.current.forEach(star => star?.draw());
            animationRef.current = requestAnimationFrame(loop);
        }

        function init() {
            context.fillStyle = 'rgba(25,25,25,0.1)';
            context.fillRect(0, 0, cw, ch);
            for (let i = 0; i < 2500; i++) new Star();
            loop();
        }

        init();

        // Cleanup
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (canvasRef.current && container.contains(canvasRef.current)) container.removeChild(canvasRef.current);
            centerHover.removeEventListener('click', handleClick);
            centerHover.removeEventListener('mouseover', handleMouseOver);
            centerHover.removeEventListener('mouseout', handleMouseOut);
        };
    }, [targetSectionId]);

    return (
        <div ref={containerRef} className={`h-screen w-full relative flex overflow-hidden blackhole ${className}`}>
            <div ref={centerHoverRef} className="w-64 h-64 bg-transparent rounded-full absolute left-1/2 top-1/2 -mt-32 -ml-32 z-20 cursor-pointer flex items-center justify-center transition-all duration-500 group hover:[&>span]:text-neutral-300 hover:[&>span]:before:bg-neutral-300 hover:[&>span]:after:bg-neutral-300">
                <span className="animate-pulse-smooth text-[#00bfff] text-lg relative transition-all duration-500 font-serif">
                    <button type='button' className='cursor-pointer'>
                        <Logo path={"/LogoBrand.png"} className={'w-32 h-32 md:w-32 md:h-32'} />
                        <Medium text={"INIZIA DA QUI"} />
                    </button>
                </span>
            </div>
        </div>
    );
}
