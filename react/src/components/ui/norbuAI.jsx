import { useState } from 'react';
import useStore from '../../store';

export const NorbuAI = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const { darkMode } = useStore();

    return (
        <div 
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px'
            }}
        >
            {showTooltip && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        maxWidth: '250px',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        marginBottom: '8px'
                    }}
                >
                    Norbu AI is a Buddhist AI assistant trained on authentic Buddhist texts. 
                    Click to interact with this AI project.
                </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                    onClick={() => setShowTooltip(!showTooltip)}
                    style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '2px solid #666',
                        backgroundColor: 'white',
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#666';
                        e.currentTarget.style.color = 'white';
                        setShowTooltip(true);
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#666';
                        setShowTooltip(false);
                    }}
                >
                    i
                </button>
                <a 
                    href="https://norbu-ai.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://buddhistchannel.tv/images/norbu-widget.png"
                        alt="Norbu AI Widget"
                        style={{
                            width: window.innerWidth <= 640 ? '75px' : '100px',
                            borderRadius: '50%',
                            transition: 'all 0.2s ease-in-out',
                            border: darkMode ? '2px solid rgba(255, 255, 255, 0.8)' : 'none',
                            padding: '2px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </a>
            </div>
        </div>
    );
};