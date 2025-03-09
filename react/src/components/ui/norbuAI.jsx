export const NorbuAI = () => {
    return (
        <div 
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999
            }}
        >
            <a 
                href="https://norbu-ai.org" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img
                    src="https://buddhistchannel.tv/images/norbu-widget.png"
                    alt="Widget Image"
                    style={{
                        width: '100px',
                        borderRadius: '50%',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </a>
        </div>
    );
};