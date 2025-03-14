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
import { FaHandsHelping, FaArrowRight } from "react-icons/fa";

export const VolitionalAct2 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-emerald-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#10b981',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#ecfdf5'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#047857', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top"
          style={{ background: '#047857', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-emerald-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Volitional Act</p>
          <p className="text-emerald-700 italic lg:ml-4 text-sm lg:text-base mb-2" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Saṅkhāra)</p>
          <div className="mt-3 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-emerald-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>more on karma</span>
            <FaHandsHelping className="text-emerald-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-emerald-50/50 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <FaHandsHelping className="text-emerald-700 text-xl" />
                  <h2 className="text-3xl font-bold text-emerald-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Saṅkhāra (संस्कार)</h2>
                </div>
                <p className="text-emerald-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Volitional Formations - The Shaping of Karma</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-emerald-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-emerald-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Saṅkhāra refers to volitional formations or mental constructs that shape our karma and future experiences. These intentional actions create the conditions for future consciousness and becoming.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-900 border-b border-emerald-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Three Types of Saṅkhāra:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Kāya-saṅkhāra</h4>
                        <p className="mt-2 text-emerald-950">Bodily formations - physical actions and their intentional basis that shape our physical experience.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Vacī-saṅkhāra</h4>
                        <p className="mt-2 text-emerald-950">Verbal formations - speech and verbal actions that create ripples of cause and effect through communication.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Citta-saṅkhāra</h4>
                        <p className="mt-2 text-emerald-950">Mental formations - thoughts, intentions, and mental states that condition our consciousness and perception.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-900 border-b border-emerald-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Intentional actions that create karma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Mental conditioning and habitual patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Volition and decision-making processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Formation of future experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Conditioning of consciousness</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-emerald-800 border-t border-emerald-100 pt-4 text-center">
                    "As you sow, so shall you reap." — The Buddha
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-emerald-100 bg-emerald-50/30">
                <Button color="success" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="success" className="font-medium">
                  <FaArrowRight className="mr-2" /> Act Wisely
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};