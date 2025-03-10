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
import { FaLink, FaUnlink } from "react-icons/fa";

export const Clinging9 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-amber-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#f59e0b',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#fffbeb'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Top}
          id="top"
          style={{ background: '#b45309', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#b45309', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-amber-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Clinging</p>
          <p className="text-amber-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Upādāna)</p>
          <div className="mt-3 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-amber-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>ATTACHMENT</span>
            <FaLink className="text-amber-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-amber-50/50 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <FaLink className="text-amber-700 text-xl" />
                  <h2 className="text-3xl font-bold text-amber-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Upādāna (उपादान)</h2>
                </div>
                <p className="text-amber-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Clinging - The Intensification of Craving</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-amber-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-amber-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Upādāna refers to clinging or attachment, which is an intensified form of craving (taṇhā). While craving is a thirst for objects or experiences, clinging is the sustained mental and emotional grasping that follows.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Four Types of Clinging:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6 hover:bg-amber-50">
                        <h4 className="font-semibold text-lg text-amber-900">Clinging to Sensual Pleasures (Kāmupādāna)</h4>
                        <p className="mt-2 text-amber-950">Attachment to pleasant experiences through the six senses, including sights, sounds, smells, tastes, touches, and mental objects.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6 hover:bg-amber-50">
                        <h4 className="font-semibold text-lg text-amber-900">Clinging to Views (Diṭṭhupādāna)</h4>
                        <p className="mt-2 text-amber-950">Attachment to opinions, beliefs, ideologies, and philosophical positions, including wrong views about the nature of reality.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6 hover:bg-amber-50">
                        <h4 className="font-semibold text-lg text-amber-900">Clinging to Rules and Observances (Sīlabbatupādāna)</h4>
                        <p className="mt-2 text-amber-950">Attachment to rituals, ceremonies, and religious practices as ends in themselves, believing they alone lead to liberation.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6 hover:bg-amber-50">
                        <h4 className="font-semibold text-lg text-amber-900">Clinging to the Doctrine of Self (Attavādupādāna)</h4>
                        <p className="mt-2 text-amber-950">Attachment to the notion of a permanent, unchanging self or soul, leading to identification with the five aggregates.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                        <span>Arises from craving (taṇhā)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                        <span>Conditions becoming (bhava)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                        <span>Stronger and more persistent than craving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                        <span>Can be released through wisdom and non-identification</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-amber-800 border-t border-amber-100 pt-4 text-center">
                    "Clinging to one thing and rejecting another creates conflict. The wise person accepts what comes without preference." — Buddhist teaching
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-amber-100 bg-amber-50/30">
                <Button color="warning" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="warning" className="font-medium">
                  <FaUnlink className="mr-2" /> Let Go
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};