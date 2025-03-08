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
import { FaEye, FaRegEye } from "react-icons/fa";

export const SixSenses5 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-purple-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#a855f7',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#faf5ff'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Right}
          id="right"
          style={{ background: '#7e22ce', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left"
          style={{ background: '#7e22ce', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-purple-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Six Senses</p>
          <p className="text-purple-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Saḷāyatana)</p>
          <div className="mt-3 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-purple-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>PERCEPTION</span>
            <FaEye className="text-purple-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-purple-50/50 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <FaRegEye className="text-purple-700 text-xl" />
                  <h2 className="text-3xl font-bold text-purple-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Saḷāyatana (षडायतन)</h2>
                </div>
                <p className="text-purple-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>The Six Sense Bases - Gateways of Perception</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-purple-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-purple-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Saḷāyatana refers to the six sense bases or sense spheres through which we experience the world. These are the gateways through which consciousness makes contact with objects, leading to perception and feeling.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-purple-900 border-b border-purple-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>The Six Sense Bases:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Eye (Cakkhu)</h4>
                        <p className="mt-2 text-purple-950">The faculty of vision that allows perception of visible forms and colors.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Ear (Sota)</h4>
                        <p className="mt-2 text-purple-950">The faculty of hearing that allows perception of sounds and tones.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Nose (Ghāna)</h4>
                        <p className="mt-2 text-purple-950">The faculty of smell that allows perception of odors and scents.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Tongue (Jivhā)</h4>
                        <p className="mt-2 text-purple-950">The faculty of taste that allows perception of flavors.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Body (Kāya)</h4>
                        <p className="mt-2 text-purple-950">The faculty of touch that allows perception of physical sensations.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-purple-300 transition-all duration-300 hover:border-l-6 hover:bg-purple-50">
                        <h4 className="font-semibold text-lg text-purple-900">Mind (Mano)</h4>
                        <p className="mt-2 text-purple-950">The faculty of mental cognition that allows perception of thoughts, ideas, and mental objects.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-purple-900 border-b border-purple-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-700 mt-2"></span>
                        <span>Conditioned by name-and-form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-700 mt-2"></span>
                        <span>Gateways for contact with the world</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-700 mt-2"></span>
                        <span>Basis for contact and feeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-700 mt-2"></span>
                        <span>Subject to impermanence and change</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-purple-800 border-t border-purple-100 pt-4 text-center">
                    "The six sense bases are the doors through which we experience the world." — Buddhist teaching
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-purple-100 bg-purple-50/30">
                <Button color="secondary" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="secondary" className="font-medium">
                  <FaRegEye className="mr-2" /> Observe Mindfully
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};