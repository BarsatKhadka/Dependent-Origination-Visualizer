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
import { FaHandshake, FaLink } from "react-icons/fa";

export const Contact6 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-orange-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#f97316',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#fff7ed'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Right}
          id="right"
          style={{ background: '#c2410c', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left"
          style={{ background: '#c2410c', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-orange-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Contact</p>
          <p className="text-orange-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Phassa)</p>
          <div className="mt-3 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-orange-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>CONNECTION</span>
            <FaHandshake className="text-orange-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-orange-50/50 border-b border-orange-100">
                <div className="flex items-center gap-2">
                  <FaLink className="text-orange-700 text-xl" />
                  <h2 className="text-3xl font-bold text-orange-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Phassa (फस्स)</h2>
                </div>
                <p className="text-orange-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Contact - The Meeting of Sense and Object</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-orange-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-orange-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Phassa refers to the contact or impression that occurs when a sense organ, its corresponding consciousness, and an object come together. It is the meeting point that allows for experience to arise.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-orange-900 border-b border-orange-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Six Types of Contact:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Eye Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of eye faculty, visual consciousness, and visible objects.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Ear Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of ear faculty, auditory consciousness, and sounds.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Nose Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of nose faculty, olfactory consciousness, and odors.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Tongue Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of tongue faculty, gustatory consciousness, and tastes.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Body Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of body faculty, tactile consciousness, and tangible objects.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-orange-300 transition-all duration-300 hover:border-l-6 hover:bg-orange-50">
                        <h4 className="font-semibold text-lg text-orange-900">Mind Contact</h4>
                        <p className="mt-2 text-orange-950">The meeting of mind faculty, mental consciousness, and mental objects.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-orange-900 border-b border-orange-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-700 mt-2"></span>
                        <span>Conditioned by the six sense bases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-700 mt-2"></span>
                        <span>Necessary for feeling to arise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-700 mt-2"></span>
                        <span>Momentary and constantly changing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-700 mt-2"></span>
                        <span>The bridge between inner and outer worlds</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-orange-800 border-t border-orange-100 pt-4 text-center">
                    "From contact arises feeling, from feeling arises craving." — The Buddha
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-orange-100 bg-orange-50/30">
                <Button color="warning" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="warning" className="font-medium">
                  <FaLink className="mr-2" /> Notice Connections
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};