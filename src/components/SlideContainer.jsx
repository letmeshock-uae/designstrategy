import React, { useState, useEffect, useCallback } from 'react';
import NavigationHint from './NavigationHint';

export default function SlideContainer({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [direction, setDirection] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPrintMode, setIsPrintMode] = useState(false);

    const goToSlide = useCallback((newIndex, dir) => {
        if (isTransitioning) return;
        if (newIndex < 0 || newIndex >= slides.length) return;

        setDirection(dir);
        setPrevIndex(currentIndex);
        setCurrentIndex(newIndex);
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
            setPrevIndex(null);
        }, 400);
    }, [isTransitioning, slides.length, currentIndex]);

    const goNext = useCallback(() => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1, 1);
        }
    }, [currentIndex, goToSlide, slides.length]);

    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1, -1);
        }
    }, [currentIndex, goToSlide]);

    const goToFirst = useCallback(() => {
        if (currentIndex !== 0) {
            goToSlide(0, -1);
        }
    }, [currentIndex, goToSlide]);

    const exportToPDF = useCallback(() => {
        setIsPrintMode(true);

        setTimeout(() => {
            window.print();

            setTimeout(() => {
                setIsPrintMode(false);
            }, 1000);
        }, 500);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isPrintMode || isTransitioning) return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                goNext();
            } else if (e.key === 'ArrowLeft') {
                goPrev();
            } else if (e.key === 'r' || e.key === 'R') {
                goToFirst();
            } else if (e.key === 'p' || e.key === 'P') {
                exportToPDF();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goNext, goPrev, goToFirst, exportToPDF, isPrintMode, isTransitioning]);

    // Touch/swipe support
    const [touchStart, setTouchStart] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!touchStart || isTransitioning) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goNext();
            } else {
                goPrev();
            }
        }

        setTouchStart(null);
    };

    // Print mode - show all slides
    if (isPrintMode) {
        return (
            <div className="print-container">
                {slides.map((slide, index) => (
                    <div key={index} className="print-slide">
                        {slide}
                    </div>
                ))}
            </div>
        );
    }

    // Normal presentation mode
    return (
        <div
            className="relative w-screen h-screen overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Previous slide (exiting) */}
            {isTransitioning && prevIndex !== null && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `translateX(${direction * -100}%)`,
                        transition: 'transform 0.4s ease-out',
                    }}
                >
                    {slides[prevIndex]}
                </div>
            )}

            {/* Current slide (entering or static) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    transform: isTransitioning
                        ? 'translateX(0)'
                        : 'translateX(0)',
                    animation: isTransitioning
                        ? (direction === 1
                            ? 'slideInFromRight 0.4s ease-out forwards'
                            : 'slideInFromLeft 0.4s ease-out forwards')
                        : 'none'
                }}
            >
                {slides[currentIndex]}
            </div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes slideInFromRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes slideInFromLeft {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            <NavigationHint
                currentSlide={currentIndex + 1}
                totalSlides={slides.length}
                canGoBack={currentIndex > 0}
                canGoForward={currentIndex < slides.length - 1}
            />

            {/* Download PDF Button */}
            <button
                onClick={exportToPDF}
                className="fixed top-6 right-6 z-40 px-4 py-2 rounded-lg text-mono-xs font-semibold bg-constant-black dark:bg-grey-700 text-constant-white hover:bg-grey-800 dark:hover:bg-grey-600 shadow-lg hover:shadow-xl transition-all duration-300 print:hidden"
            >
                <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF
                </span>
            </button>
        </div>
    );
}

