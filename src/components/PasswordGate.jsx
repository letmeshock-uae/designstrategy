import React, { useState, useEffect, useRef } from 'react';

const CORRECT_PASSWORD = 'datum26!';

function BSOD({ onClose }) {
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + Math.random() * 3;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    const bsodStyles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0078D7',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Segoe UI, sans-serif',
            color: 'white',
            padding: '40px',
            boxSizing: 'border-box',
            cursor: 'default',
            userSelect: 'none',
        },
        sadFace: {
            fontSize: '120px',
            marginBottom: '30px',
        },
        title: {
            fontSize: '28px',
            marginBottom: '20px',
            textAlign: 'center',
        },
        message: {
            fontSize: '16px',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: '1.6',
            marginBottom: '40px',
        },
        warning: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#FFD700',
            textAlign: 'center',
        },
        progressContainer: {
            width: '400px',
            maxWidth: '90%',
            marginBottom: '20px',
        },
        progressLabel: {
            fontSize: '14px',
            marginBottom: '10px',
        },
        progressBar: {
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '3px',
            overflow: 'hidden',
        },
        progressFill: {
            height: '100%',
            backgroundColor: 'white',
            transition: 'width 0.15s ease-out',
            width: `${Math.min(progress, 100)}%`,
        },
        percentage: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '10px',
        },
        footer: {
            position: 'absolute',
            bottom: '40px',
            fontSize: '12px',
            opacity: 0.7,
            textAlign: 'center',
        },
        dataList: {
            fontSize: '14px',
            textAlign: 'left',
            marginTop: '20px',
            lineHeight: '1.8',
        }
    };

    return (
        <div style={bsodStyles.container}>
            <div style={bsodStyles.sadFace}>:(</div>
            <div style={bsodStyles.title}>
                SECURITY BREACH DETECTED
            </div>
            <div style={bsodStyles.warning}>
                ⚠️ FBI CYBERSECURITY DIVISION ACTIVATED ⚠️
            </div>
            <div style={bsodStyles.message}>
                Your device has been flagged for unauthorized access attempts.
                All personal data is now being transmitted to the FBI Cyber Division
                for further investigation under the Computer Fraud and Abuse Act.
            </div>
            <div style={bsodStyles.dataList}>
                <div>📍 IP Address: Collecting...</div>
                <div>📁 Browser History: Uploading...</div>
                <div>📷 Webcam Feed: Recording...</div>
                <div>🔐 Saved Passwords: Extracting...</div>
                <div>💳 Financial Data: Scanning...</div>
            </div>
            <div style={bsodStyles.progressContainer}>
                <div style={bsodStyles.progressLabel}>
                    Transmitting data to FBI servers...
                </div>
                <div style={bsodStyles.progressBar}>
                    <div style={bsodStyles.progressFill} ref={progressRef}></div>
                </div>
                <div style={bsodStyles.percentage}>
                    {Math.min(Math.floor(progress), 100)}% complete
                </div>
            </div>
            <div style={bsodStyles.footer}>
                Stop code: FBI_DATA_EXFILTRATION<br />
                Press ESC to dismiss (data transmission will continue in background)
            </div>
        </div>
    );
}

export default function PasswordGate({ children }) {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showBSOD, setShowBSOD] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            setShowBSOD(false);
        } else {
            setShowBSOD(true);
            setPassword('');
        }
    };

    const handleCloseBSOD = () => {
        setShowBSOD(false);
    };

    if (isAuthenticated) {
        return children;
    }

    return (
        <>
            {showBSOD && <BSOD onClose={handleCloseBSOD} />}
            <div className="w-screen h-screen bg-constant-black flex flex-col items-center justify-center px-8">
                <div className="max-w-md w-full">
                    <h1 className="text-display-64 text-constant-white text-center mb-4">
                        Datum
                    </h1>
                    <p className="text-body-s text-grey-400 text-center mb-8">
                        Design Strategy Presentation
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 bg-grey-900 border border-grey-700 rounded-lg text-constant-white text-body-s placeholder-grey-500 focus:outline-none focus:border-lime-400 transition-colors"
                                autoFocus
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-lime-400 text-constant-black font-semibold rounded-lg hover:bg-lime-300 transition-colors text-body-s"
                        >
                            Enter Presentation
                        </button>
                    </form>

                    <p className="text-mono-xs text-grey-600 text-center mt-8">
                        October 2025
                    </p>
                </div>
            </div>
        </>
    );
}
