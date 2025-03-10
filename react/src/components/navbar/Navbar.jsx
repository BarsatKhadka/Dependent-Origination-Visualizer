import React, { useState } from 'react';
import useStore from '../../store';
import { Button } from "@nextui-org/react";

export const Navbar = () => {
  const { darkMode } = useStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  
  const buddhistConcepts = [
    { id: 'sunyata', label: 'Śūnyatā (Emptiness)' },
    { id: 'pratityasamutpada', label: 'Pratītyasamutpāda (Dependent Origination)' },
    { id: 'tathagatagarbha', label: 'Tathāgatagarbha (Buddha Nature)' },
    { id: 'madhyamaka', label: 'Madhyamaka (Middle way)' }
  ];

  const DhammaWheel = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" strokeWidth="1.5"/>
      <path d="M12 2v20M2 12h20" strokeWidth="1.5"/>
      <path d="M12 12L4.93 4.93M12 12l7.07-7.07M12 12l7.07 7.07M12 12l-7.07 7.07" strokeWidth="1.5"/>
    </svg>
  );

  const MobileWidget = () => (
    <div className="sm:hidden fixed top-20 left-8 z-50">
      <button
        onClick={() => setIsExpanded(true)}
        className={`
          p-3 rounded-full shadow-lg
          transition-all duration-300
          ${darkMode 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-white text-gray-900 hover:bg-gray-50'
          }
        `}
      >
        <DhammaWheel />
      </button>
    </div>
  );

  const MobileMenu = () => (
    <div 
      className={`
        fixed inset-0 z-50 
        transition-transform duration-300
        ${isExpanded ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div 
        className={`
          h-full w-full p-6
          flex flex-col gap-4
          ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}
          backdrop-blur-md
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setIsExpanded(false)}
            className={`
              p-2 rounded-full 
              ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-900'}
              transition-colors duration-200
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {buddhistConcepts.map(concept => (
            <Button
              key={concept.id}
              className={`
                w-full p-4 rounded-lg text-left
                transition-all duration-200 
                ${darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }
              `}
              data-node-type={concept.id}
            >
              {concept.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`
          hidden sm:flex items-center gap-3 px-5 py-2.5 rounded-lg
          transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm
          ${darkMode
            ? 'bg-gray-800/95 text-white border border-gray-700'
            : 'bg-white/95 text-gray-900 border border-gray-200'
          }
        `}
      >
        <span
          className="text-sm lg:text-base tracking-wide font-medium whitespace-nowrap"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          Visualize on: (click the wheel)
        </span>
        <button
          onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
          className={`
            p-2 rounded-full transition-all duration-300
            ${darkMode 
              ? 'hover:bg-gray-700' 
              : 'hover:bg-gray-100'
            }
          `}
          aria-label="Toggle concept menu"
        >
          <DhammaWheel /> 
        </button>
        
        <div className={`
          flex gap-2 items-center overflow-hidden transition-all duration-300
          ${isDesktopExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}
        `}>
          {buddhistConcepts.map(concept => (
            <Button
              key={concept.id}
              className={`
                text-xs lg:text-sm px-3 py-1.5 rounded-md whitespace-nowrap
                transition-all duration-200 
                font-medium
                ${darkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-indigo-200 hover:bg-indigo-300 text-indigo-800'
                }
                focus:outline-none focus:ring-2 
                ${darkMode ? 'focus:ring-indigo-500' : 'focus:ring-indigo-400'}
                shadow-sm hover:shadow
              `}
              style={{ fontFamily: "'Roboto Mono', monospace" }}
              data-node-type={concept.id}
            >
              {concept.label}
            </Button>
          ))}
        </div>
      </div>
      <MobileWidget />
      {isExpanded && <MobileMenu />}
    </>
  );
};

export default Navbar;