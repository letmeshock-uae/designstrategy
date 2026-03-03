import React, { useEffect, useRef, useState } from 'react';

export default function ParticleTransition({ isActive, onComplete }) {
    const canvasRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 800;
        const duration = 800; // Animation duration in ms
        const startTime = Date.now();

        setIsAnimating(true);

        // Create particles starting from random positions, moving to grid
        for (let i = 0; i < particleCount; i++) {
            const targetX = Math.random() * canvas.width;
            const targetY = Math.random() * canvas.height;

            // Start from edges or random spread
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.max(canvas.width, canvas.height);

            particles.push({
                x: targetX + Math.cos(angle) * distance * Math.random(),
                y: targetY + Math.sin(angle) * distance * Math.random(),
                targetX,
                targetY,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.3 + 0.7,
                opacity: 0,
                color: Math.random() > 0.7 ? '#bcd600' : '#e0e0e0' // Mix of lime and grey
            });
        }

        let animationId;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Move towards target
                p.x = p.x + (p.targetX - p.x) * easeProgress * p.speed;
                p.y = p.y + (p.targetY - p.y) * easeProgress * p.speed;

                // Fade in then fade out
                if (progress < 0.5) {
                    p.opacity = easeProgress * 0.8;
                } else {
                    p.opacity = (1 - progress) * 1.6;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba').replace('#bcd600', `rgba(188, 214, 0, ${p.opacity})`).replace('#e0e0e0', `rgba(224, 224, 224, ${p.opacity})`);

                // Simple hex to rgba conversion
                if (p.color === '#bcd600') {
                    ctx.fillStyle = `rgba(188, 214, 0, ${p.opacity})`;
                } else {
                    ctx.fillStyle = `rgba(224, 224, 224, ${p.opacity})`;
                }

                ctx.fill();
            });

            if (progress < 1) {
                animationId = requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
                if (onComplete) onComplete();
            }
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isActive, onComplete]);

    if (!isActive && !isAnimating) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-30"
        />
    );
}
