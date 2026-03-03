import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function PDFExportButton({ slidesContainerRef, totalSlides = 26 }) {
    const [isExporting, setIsExporting] = useState(false);
    const [progress, setProgress] = useState(0);

    const exportToPDF = async () => {
        if (isExporting) return;

        setIsExporting(true);
        setProgress(0);

        try {
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1920, 1080]
            });

            // Get the slides container
            const container = slidesContainerRef.current;
            if (!container) {
                alert('Failed to find slides container');
                setIsExporting(false);
                return;
            }

            // Find all slide sections
            const slideElements = container.querySelectorAll('section');

            for (let i = 0; i < slideElements.length; i++) {
                const slide = slideElements[i];

                // Update progress
                setProgress(Math.round(((i + 1) / slideElements.length) * 100));

                // Capture slide as canvas
                const canvas = await html2canvas(slide, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    width: 1920,
                    height: 1080
                });

                // Convert to image
                const imgData = canvas.toDataURL('image/jpeg', 0.95);

                // Add to PDF (add new page for slides after the first)
                if (i > 0) {
                    pdf.addPage([1920, 1080], 'landscape');
                }

                pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
            }

            // Save the PDF
            pdf.save('Datum_Design_Strategy_2025.pdf');

        } catch (error) {
            console.error('PDF export failed:', error);
            alert('Failed to export PDF. Please try again.');
        } finally {
            setIsExporting(false);
            setProgress(0);
        }
    };

    return (
        <button
            onClick={exportToPDF}
            disabled={isExporting}
            className={`
        fixed top-6 right-6 z-40
        px-4 py-2 rounded-lg
        text-mono-xs font-semibold
        transition-all duration-300
        ${isExporting
                    ? 'bg-grey-200 text-grey-500 cursor-wait'
                    : 'bg-constant-black text-constant-white hover:bg-grey-800 shadow-lg hover:shadow-xl'
                }
      `}
        >
            {isExporting ? (
                <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Exporting {progress}%
                </span>
            ) : (
                <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                </span>
            )}
        </button>
    );
}
