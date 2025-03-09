import React from 'react';
import useStore from '../../store';

export const Navbar = () => {
    const { darkMode } = useStore();

    return (
        <div
            className={`
                hidden sm:flex items-center gap-3 px-5 py-2.5 rounded-lg 
                transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm "
                ${darkMode 
                    ? 'bg-gray-800/95 text-white border border-gray-700' 
                    : 'bg-white/95 text-gray-900 border border-gray-200'
                }
            `}
        >
            <span 
                className="text-sm lg:text-base tracking-wide font-medium"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
                "Transcendental Dependent Origination"
            </span>
        </div>
    );
};

export default Navbar;