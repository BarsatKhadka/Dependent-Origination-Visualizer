import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { NextUIProvider } from "@nextui-org/react";
import { DarkModeToggle } from "./components/ui/toggle";
import GitHubIcon from "./components/ui/githubIcon";
import useStore from "./store";

function App() {
  const {darkMode , setDarkMode} = useStore();
  return (
    <>
      <NextUIProvider>
        <GitHubIcon />
        <div className="flex justify-end">
          <DarkModeToggle />
        </div>
        <div 
          className="flex justify-center items-center h-screen"
          style={{
            backgroundColor: '#fafafa', 
            backgroundImage: `
              radial-gradient(circle at center, rgba(180, 200, 220, 0.1) 10%, transparent 10%),
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(180, 200, 220, 0.05) 10px, rgba(180, 200, 220, 0.05) 20px)
            `,
            backgroundSize: '100px 100px', 
          }}
        >
          <Flow />
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;