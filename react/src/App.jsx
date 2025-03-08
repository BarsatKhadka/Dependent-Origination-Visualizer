import { Flow } from "./components/Flow";
import '@xyflow/react/dist/style.css';
import { NextUIProvider } from "@nextui-org/react"


function App() {
  return (
    <>
    <NextUIProvider>
    <div className="flex justify-center items-center h-screen">
        <Flow />
    </div>
    </NextUIProvider>
    </>
  )
}

export default App
