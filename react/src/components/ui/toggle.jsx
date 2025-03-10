import { Button } from "@nextui-org/react"
import useStore from '../../store'

const MoonIcon = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    className="text-black"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const SunIcon = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    className="text-white"
    {...props}
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" />
    
    <path
      fill="currentColor"
      d="M12 2v4M12 18v4M2 12h4M18 12h4"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
    />
    
    <path
      fill="currentColor"
      d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
    />
    
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);


export function DarkModeToggle() {
  const {darkMode, setDarkMode} = useStore();
  const toggleDarkMode = () =>{
    const currentMode = !darkMode;
    setDarkMode(currentMode);
    if(String(currentMode) === 'true'){
      localStorage.setItem('dark', 'true');
    }
    else{
      localStorage.removeItem('dark')
    }

   
  }

  return (
    <div className="absolute lg:top-4 lg:right-4 top-2 right-2 z-10 ">
      <Button
        isIconOnly
        variant="ghost"
        aria-label="Toggle dark mode"
        onPress={toggleDarkMode}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      
      </Button>
    </div>
  );
}