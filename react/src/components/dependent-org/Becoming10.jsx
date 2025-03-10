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
import { FaSeedling, FaLeaf } from "react-icons/fa";

export const Becoming10 = () => {
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
          position={Position.Top}
          id="top"
          style={{ background: '#047857', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right"
          style={{ background: '#047857', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-emerald-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Becoming</p>
          <p className="text-emerald-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Bhava)</p>
          <div className="mt-3 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-emerald-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>PROCESS</span>
            <FaSeedling className="text-emerald-700" />
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
                  <FaSeedling className="text-emerald-700 text-xl" />
                  <h2 className="text-3xl font-bold text-emerald-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Bhava (भव)</h2>
                </div>
                <p className="text-emerald-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Becoming - The Process of Coming into Existence</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-emerald-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-emerald-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Bhava refers to the process of becoming or coming into existence. It is the active process of producing a new existence and is conditioned by clinging (upādāna). Bhava represents both the process of becoming and the states of existence that result.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-900 border-b border-emerald-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Two Aspects of Becoming:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Kamma-bhava (Active Becoming)</h4>
                        <p className="mt-2 text-emerald-950">The active process of producing a new existence through volitional actions (kamma). This includes all actions that generate karmic energy and lead to rebirth.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Upapatti-bhava (Resultant Becoming)</h4>
                        <p className="mt-2 text-emerald-950">The passive process of being reborn in a particular realm of existence as a result of past kamma. This refers to the actual states of existence that result from kamma-bhava.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-900 border-b border-emerald-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Three Realms of Becoming:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Sensuous Becoming (Kāma-bhava)</h4>
                        <p className="mt-2 text-emerald-950">Becoming in the realm of sensual desire, which includes the human realm, the animal realm, the realm of hungry ghosts, the hell realms, and the lower heavenly realms.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Form Becoming (Rūpa-bhava)</h4>
                        <p className="mt-2 text-emerald-950">Becoming in the realm of fine material form, which includes the higher heavenly realms attained through mastery of the form jhānas (meditative absorptions).</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-emerald-300 transition-all duration-300 hover:border-l-6 hover:bg-emerald-50">
                        <h4 className="font-semibold text-lg text-emerald-900">Formless Becoming (Arūpa-bhava)</h4>
                        <p className="mt-2 text-emerald-950">Becoming in the immaterial realm, which includes the highest heavenly realms attained through mastery of the formless jhānas.</p>
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
                        <span>Arises from clinging (upādāna)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Conditions birth (jāti)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Involves both active and passive processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-700 mt-2"></span>
                        <span>Can be transcended through the cessation of craving</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-emerald-800 border-t border-emerald-100 pt-4 text-center">
                    "Like a seed planted in fertile soil, becoming grows from the nutrients of clinging and leads to the sprouting of a new existence." — Buddhist teaching
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-emerald-100 bg-emerald-50/30">
                <Button color="success" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="success" className="font-medium">
                  <FaLeaf className="mr-2" /> Understand Process
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};