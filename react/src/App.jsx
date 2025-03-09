import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { Navbar, NextUIProvider } from "@nextui-org/react";
import { DarkModeToggle } from "./components/ui/toggle";
import GitHubIcon from "./components/ui/githubIcon";
import { Analytics } from "@vercel/analytics/react"
import { NorbuAI } from "./components/ui/norbuAI";

function App() {
  return (
    <>
      <NextUIProvider>
        <GitHubIcon />
        {/* <Navbar/> */}

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
        

          <NorbuAI />


      </NextUIProvider>
      <Analytics />
    </>
  );
}

export default App;