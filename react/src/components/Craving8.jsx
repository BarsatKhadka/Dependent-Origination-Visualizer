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
import { FaFire, FaWater } from "react-icons/fa";

export const Craving8 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-red-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#ef4444',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#fef2f2'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Top}
          id="top"
          style={{ background: '#b91c1c', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#b91c1c', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-red-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Craving</p>
          <p className="text-red-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Taṇhā)</p>
          <div className="mt-3 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-red-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>DESIRE</span>
            <FaFire className="text-red-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-red-50/50 border-b border-red-100">
                <div className="flex items-center gap-2">
                  <FaFire className="text-red-700 text-xl" />
                  <h2 className="text-3xl font-bold text-red-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Taṇhā (तण्हा)</h2>
                </div>
                <p className="text-red-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Craving - The Thirst for Experience</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-red-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-red-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Taṇhā refers to the thirst, desire, or craving that arises from pleasant feeling. It is the driving force that perpetuates the cycle of suffering and rebirth, as it leads to clinging and becoming.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-red-900 border-b border-red-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Three Types of Craving:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-red-300 transition-all duration-300 hover:border-l-6 hover:bg-red-50">
                        <h4 className="font-semibold text-lg text-red-900">Craving for Sensual Pleasures (Kāma-taṇhā)</h4>
                        <p className="mt-2 text-red-950">The desire for pleasant sensory experiences through the six senses, including sights, sounds, smells, tastes, touches, and mental objects.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-red-300 transition-all duration-300 hover:border-l-6 hover:bg-red-50">
                        <h4 className="font-semibold text-lg text-red-900">Craving for Existence (Bhava-taṇhā)</h4>
                        <p className="mt-2 text-red-950">The desire to continue existing, to be reborn, to have eternal life, or to maintain a particular identity or state of being.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-red-300 transition-all duration-300 hover:border-l-6 hover:bg-red-50">
                        <h4 className="font-semibold text-lg text-red-900">Craving for Non-existence (Vibhava-taṇhā)</h4>
                        <p className="mt-2 text-red-950">The desire for annihilation, to not exist, or to escape from a particular state of being; often manifests as aversion or the wish to be rid of unpleasant experiences.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-red-900 border-b border-red-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-700 mt-2"></span>
                        <span>Arises from feeling (vedanā)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-700 mt-2"></span>
                        <span>Leads to clinging (upādāna)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-700 mt-2"></span>
                        <span>The second Noble Truth of the cause of suffering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-700 mt-2"></span>
                        <span>Can be extinguished through mindfulness and wisdom</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-red-800 border-t border-red-100 pt-4 text-center">
                    "The craving that makes for further becoming — accompanied by passion & delight, relishing now here & now there — i.e., craving for sensuality, craving for becoming, craving for non-becoming: This is the origination of stress." — The Buddha
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-red-100 bg-red-50/30">
                <Button color="danger" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="danger" className="font-medium">
                  <FaWater className="mr-2" /> Release Attachment
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};