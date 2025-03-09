import React, { useEffect, useState } from 'react';
import useStore from '../../store';

const GitHubIcon = () => {
  const [stars, setStars] = useState(null);
  const {darkMode} = useStore();

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/BarsatKhadka/Dependent-Origination-Visualizer'
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchStars();
  }, []);

  return (
    <div className="absolute z-50">
      <a
        href="https://github.com/BarsatKhadka/Dependent-Origination-Visualizer"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center gap-3 px-5 py-2.5 rounded-lg transition-all duration-300 
          shadow-lg hover:shadow-xl backdrop-blur-sm
          ${darkMode 
            ? 'bg-gray-800/95 hover:bg-gray-700/95 text-white border border-gray-700' 
            : 'bg-white/95 hover:bg-gray-100/95 text-gray-900 border border-gray-200'
          }
        `}
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <span 
          className={`tracking-wide font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          github
        </span>
        {stars !== null && (
          <span className={`
            flex items-center gap-1 px-2 py-0.5 rounded-md
            ${darkMode ? 'bg-gray-900/80 text-gray-100' : 'bg-gray-100 text-gray-900'}
          `}>
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-amber-400"
            >
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
            </svg>
            <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {stars}
            </span>
          </span>
        )}
      </a>
    </div>
  );
};

export default GitHubIcon;