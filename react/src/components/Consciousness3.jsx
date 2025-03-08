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
import { FaBrain, FaLightbulb } from "react-icons/fa";

export const Consciousness3 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-blue-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#3b82f6',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#eff6ff'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#1d4ed8', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top"
          style={{ background: '#1d4ed8', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-blue-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Consciousness</p>
          <p className="text-blue-700 italic lg:ml-4 text-sm lg:text-base mb-2" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Viññāṇa)</p>
          <div className="mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-blue-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>what is it</span>
            <FaBrain className="text-blue-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-blue-50/50 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <FaBrain className="text-blue-700 text-xl" />
                  <h2 className="text-3xl font-bold text-blue-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Viññāṇa (विज्ञान)</h2>
                </div>
                <p className="text-blue-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Consciousness - The Knowing Faculty</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-blue-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-blue-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Viññāṇa refers to consciousness or the faculty of discernment that cognizes or knows an object. It is the awareness that arises when sense organs contact their respective objects.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b border-blue-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Six Types of Consciousness:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Visual Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the eye and visible forms.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Auditory Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the ear and sounds.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Olfactory Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the nose and odors.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Gustatory Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the tongue and tastes.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Tactile Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the body and tangible objects.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Mental Consciousness</h4>
                        <p className="mt-2 text-blue-950">Awareness arising from the contact between the mind and mental objects or thoughts.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b border-blue-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Conditioned by volitional formations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Dependent on sense organs and objects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Momentary and constantly changing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Not a permanent self or soul</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-blue-800 border-t border-blue-100 pt-4 text-center">
                    "Consciousness is like a river, constantly flowing and changing." — Buddhist teaching
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-blue-100 bg-blue-50/30">
                <Button color="primary" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="primary" className="font-medium">
                  <FaLightbulb className="mr-2" /> Cultivate Awareness
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};