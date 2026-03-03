import React from 'react';

export default function Slide({
    children,
    slideNumber,
    totalSlides = 26,
    bgColor = 'bg-constant-white',
    textColor = 'text-constant-black',
    fullWidth = false
}) {
    // CSS handles dark mode inversion via globals.css rules
    // bg-constant-white → black in dark mode
    // bg-constant-black → white in dark mode
    // text colors are also inverted by CSS

    const isAccent = bgColor === 'bg-lime-400';

    return (
        <section
            className={`w-screen h-screen ${bgColor} ${textColor} flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden transition-colors duration-300`}
        >
            {fullWidth ? (
                <div className="w-full h-full flex items-center justify-center">
                    {children}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center max-w-5xl w-full text-center">
                    {children}
                </div>
            )}

            {/* Slide number */}
            <span className={`text-mono-xs absolute bottom-8 right-8 opacity-50 ${isAccent ? 'text-constant-black' : textColor}`}>
                {String(slideNumber).padStart(2, '0')} / {totalSlides}
            </span>
        </section>
    );
}
