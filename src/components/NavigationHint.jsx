import React, { useState, useEffect } from 'react';

export default function NavigationHint({ currentSlide, totalSlides, canGoBack, canGoForward }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div
            className={`
        fixed bottom-8 left-1/2 -translate-x-1/2
        flex items-center gap-6
        text-mono-xs text-grey-400
        transition-opacity duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
        >
            <span className={`transition-opacity ${canGoBack ? 'opacity-100' : 'opacity-30'}`}>
                ←
            </span>
            <span className="text-grey-500">
                Use arrow keys
            </span>
            <span className={`transition-opacity ${canGoForward ? 'opacity-100' : 'opacity-30'}`}>
                →
            </span>
        </div>
    );
}
