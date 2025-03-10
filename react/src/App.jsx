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
        </div>
        <div className="fixed top-24 left-10 z-50 flex flex-col gap-4">
          <Navbar />
        </div>

        <div className="fixed top-6 right-6 z-50">
          <DarkModeToggle />
        </div>

        <div 
            className="flex justify-center items-center h-screen lg:mt-8">
          <Flow />
        </div>

        <NorbuAI />
        <Analytics />
      </NextUIProvider>
    </>
  );
}

export default App;