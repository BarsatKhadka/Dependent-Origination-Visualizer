import React from 'react';
import useStore from '../../store';

export const Navbar = () => {
  const { darkMode } = useStore();
  
  // Unique Buddhist concepts for the flow nodes
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
        transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm
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
        <span
          key={concept.id}
          className={`
            text-xs lg:text-sm px-2 py-1 rounded-md cursor-pointer
            ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}
          `}
          style={{ fontFamily: "'Roboto Mono', monospace" }}
          data-node-type={concept.id}
        >
          {concept.label}
        </span>
      ))}
    </div>
  );
};

export default Navbar;