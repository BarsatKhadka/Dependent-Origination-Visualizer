import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { NextUIProvider } from "@nextui-org/react"
import { DarkModeToggle } from "./components/ui/toggle";
import GitHubIcon from "./components/ui/githubIcon";


function App() {
  return (
    <>
    <NextUIProvider>
    <GitHubIcon/>
    <div className="flex justify-end">
    <DarkModeToggle/>
    </div>
    <div className="flex justify-center items-center h-screen">
      
        <Flow />
    </div>
    </NextUIProvider>
    </>
  )
}

export default App
