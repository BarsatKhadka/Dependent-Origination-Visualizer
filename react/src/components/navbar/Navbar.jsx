import React from 'react';
import useStore from '../../store';
import { Button } from "@nextui-org/react";

export const Navbar = () => {
  const { darkMode } = useStore();
  
  
  const buddhistConcepts = [
    { id: 'sunyata', label: 'Śūnyatā (Emptiness)' },
    { id: 'pratityasamutpada', label: 'Pratītyasamutpāda (Dependent Origination)' },
    { id: 'tathagatagarbha', label: 'Tathāgatagarbha (Buddha Nature)' },
    { id: 'madhyamaka', label: 'Madhyamaka (Middle way)' }
  ];

  return (

    <div
      className={`
        hidden sm:flex items-center gap-3 px-5 py-2.5 rounded-lg
        transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm mb-4
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
        Visualize on:
      </span>
      <div className="h-4 w-px bg-gray-400/50 mx-1"></div>
      {buddhistConcepts.map(concept => (
        <Button
          key={concept.id}

          className={`
            text-xs lg:text-sm px-3 py-1.5 rounded-md 
            transition-all duration-200 
            font-medium
            ${darkMode 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-indigo-200 hover:bg-indigo-200 text-indigo-800'
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
  );
};

export default Navbar;