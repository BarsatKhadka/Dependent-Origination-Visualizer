import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { NextUIProvider } from "@nextui-org/react"; 
import { DarkModeToggle } from "./components/ui/toggle";
import GitHubIcon from "./components/ui/githubIcon";
import { Analytics } from "@vercel/analytics/react"
import { NorbuAI } from "./components/ui/norbuAI";
import { Navbar } from "./components/navbar/Navbar"; 

function App() {
  return (
    <>
      <NextUIProvider>
        <div className="fixed top-6 left-6 z-50 flex flex-col gap-4">
          <GitHubIcon />
          <Navbar />  
        </div>

        <div className="fixed top-6 right-6 z-50">
          <DarkModeToggle />
        </div>

        <div 
            className="flex justify-center items-center h-screen "
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

        <NorbuAI />
        <Analytics />
      </NextUIProvider>
    </>
  );
}

export default App;