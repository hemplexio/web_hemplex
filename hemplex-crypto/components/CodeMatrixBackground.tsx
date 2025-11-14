import React, { useRef, useEffect } from 'react';

const CodeMatrixBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
        };
        
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{};:,.<>/?';
        const fontSize = 16;
        let columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = [];
        
        const setup = () => {
            resizeCanvas();
            columns = Math.floor(canvas.width / fontSize);
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };
        
        setup();

        const draw = () => {
            if (!ctx) return;
            // The semi-transparent black background creates the fading trail effect
            ctx.fillStyle = 'rgba(10, 15, 20, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                
                // Glowing effect
                ctx.fillStyle = '#38BDF8'; // Bright color for the main character
                ctx.shadowColor = '#38BDF8';
                ctx.shadowBlur = 10;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset shadow for the next frame
                ctx.shadowBlur = 0;

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const animate = () => {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();
        
        const resizeObserver = new ResizeObserver(setup);
        resizeObserver.observe(document.body);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default CodeMatrixBackground;