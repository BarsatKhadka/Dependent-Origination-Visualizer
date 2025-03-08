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
    {...props}
  >
    <g fill="currentColor">
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M12 8a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M12 24a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M20 12a4 4 0 10-8 0 4 4 0 008 0z" />
      <path d="M4 12a4 4 0 108 0 4 4 0 00-8 0z" />
      <path d="M17.657 6.343a4 4 0 10-5.657 5.657 4 4 0 005.657-5.657z" />
      <path d="M6.343 17.657a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657z" />
      <path d="M17.657 17.657a4 4 0 10-5.657-5.657 4 4 0 005.657 5.657z" />
      <path d="M6.343 6.343a4 4 0 105.657 5.657 4 4 0 00-5.657-5.657z" />
    </g>
  </svg>
);

export function DarkModeToggle() {
  const {darkMode, setDarkMode} = useStore();

  return (
    <div className="absolute top-4 right-4 z-10">
      <Button
        isIconOnly
        variant="ghost"
        aria-label="Toggle dark mode"
        onPress={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
}