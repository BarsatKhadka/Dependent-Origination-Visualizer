import React from 'react';
import { Handle, Position } from '@xyflow/react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Ignorance1 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-indigo-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#6366f1',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#ede9fe'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="source"
          position={Position.Top}
          id="top"
          style={{ background: '#4338ca', width: '10px', height: '10px' }}
        />
        
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-indigo-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Ignorance</p>
          <p className="text-indigo-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Avijjā)</p>
          <div className="mt-3 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-indigo-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>ignorant of</span>
            <FaEyeSlash className="text-indigo-700" />
          </div>
        </div>
      </div>

      <Drawer 
        isOpen={isOpen} 
        onClose={onClose} 
        size="full"
        classNames={{
          base: "shadow-none",
          wrapper: "w-full",
          content: "transition-all"
        }}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            },
            exit: {
              opacity: 0,
              y: 0,
              transition: { duration: 0.2, ease: "easeIn" }
            },
          }
        }}
      >
        <DrawerContent className="shadow-none">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 bg-indigo-50/50 border-b border-indigo-100">
                <div className="flex items-center gap-2">
                  <FaEye className="text-indigo-700 text-xl" />
                  <h2 className="text-3xl font-bold text-indigo-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Avijjā (अविद्या)</h2>
                </div>
                <p className="text-indigo-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Ignorance - The Root of Suffering</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-indigo-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-indigo-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Ignorance (avijjā) is the fundamental misunderstanding of reality that drives the cycle of suffering. It is not mere lack of knowledge, but a deep misperception of the nature of existence.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-900 border-b border-indigo-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects of Ignorance:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-indigo-300 transition-all duration-300 hover:border-l-6 hover:bg-indigo-50">
                        <h4 className="font-semibold text-lg text-indigo-900">Not Understanding the Four Noble Truths</h4>
                        <p className="mt-2 text-indigo-950">Failing to recognize the nature of suffering, its origin, cessation, and the path leading to its end.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-indigo-300 transition-all duration-300 hover:border-l-6 hover:bg-indigo-50">
                        <h4 className="font-semibold text-lg text-indigo-900">Misperception of Impermanence</h4>
                        <p className="mt-2 text-indigo-950">Believing that things are permanent when they are constantly changing.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-indigo-300 transition-all duration-300 hover:border-l-6 hover:bg-indigo-50">
                        <h4 className="font-semibold text-lg text-indigo-900">Illusion of Self</h4>
                        <p className="mt-2 text-indigo-950">Clinging to the notion of a permanent, unchanging self when there is only a continuous flow of interdependent processes.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-900 border-b border-indigo-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Manifestations:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-700 mt-2"></span>
                        <span>Attachment to sensual pleasures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-700 mt-2"></span>
                        <span>Belief in eternalism or nihilism</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-700 mt-2"></span>
                        <span>Identification with body and mind</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-700 mt-2"></span>
                        <span>Moral confusion about wholesome and unwholesome actions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-indigo-800 border-t border-indigo-100 pt-4 text-center">
                    "Not knowing things as they really are." — The Buddha
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-indigo-100 bg-indigo-50/30">
                <Button color="primary" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="primary" className="font-medium">
                  <FaEye className="mr-2" /> See Clearly
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};