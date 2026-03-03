import React, { useEffect, useRef } from 'react';

export default function CursorTrail() {
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        // Initialize dot grid
        const initDots = () => {
            dotsRef.current = [];
            const spacing = 24; // Distance between dots
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dotsRef.current.push({
                        x: i * spacing,
                        y: j * spacing,
                        baseOpacity: 0,
                        targetOpacity: 0,
                        currentOpacity: 0
                    });
                }
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const revealRadius = 150; // How far the reveal effect extends

            dotsRef.current.forEach(dot => {
                // Calculate distance from mouse
                const dx = dot.x - mouse.x;
                const dy = dot.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Calculate target opacity based on distance
                if (distance < revealRadius) {
                    dot.targetOpacity = Math.max(0.1, 0.4 * (1 - distance / revealRadius));
                } else {
                    dot.targetOpacity = 0;
                }

                // Smooth transition
                dot.currentOpacity += (dot.targetOpacity - dot.currentOpacity) * 0.15;

                // Only draw if visible
                if (dot.currentOpacity > 0.01) {
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(200, 200, 200, ${dot.currentOpacity})`;
                    ctx.fill();
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-10 print:hidden"
        />
    );
}
