import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { NextUIProvider } from "@nextui-org/react"
import { DarkModeToggle } from "./components/DarkModeTooggle/toggle";


function App() {
  return (
    <>
    <NextUIProvider>
    <DarkModeToggle/>
    <div className="flex justify-center items-center h-screen">
      
        <Flow />
    </div>
    </NextUIProvider>
    </>
  )
}

export default App
