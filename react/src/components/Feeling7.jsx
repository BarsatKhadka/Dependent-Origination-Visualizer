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
import { FaHeartbeat, FaBalanceScale } from "react-icons/fa";

export const Feeling7 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-pink-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#ec4899',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#fdf2f8'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Right}
          id="right"
          style={{ background: '#be185d', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#be185d', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-pink-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Feeling</p>
          <p className="text-pink-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Vedanā)</p>
          <div className="mt-3 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-pink-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>SENSATION</span>
            <FaHeartbeat className="text-pink-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-pink-50/50 border-b border-pink-100">
                <div className="flex items-center gap-2">
                  <FaBalanceScale className="text-pink-700 text-xl" />
                  <h2 className="text-3xl font-bold text-pink-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Vedanā (वेदना)</h2>
                </div>
                <p className="text-pink-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Feeling - The Affective Experience</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-pink-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-pink-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Vedanā refers to the feeling tone or hedonic quality that accompanies every experience. It is the immediate, instinctive response that arises when consciousness makes contact with an object through the six sense bases.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-pink-900 border-b border-pink-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Three Types of Feeling:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-pink-300 transition-all duration-300 hover:border-l-6 hover:bg-pink-50">
                        <h4 className="font-semibold text-lg text-pink-900">Pleasant (Sukha)</h4>
                        <p className="mt-2 text-pink-950">Agreeable sensations that we naturally tend to pursue and cling to, creating attachment.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-pink-300 transition-all duration-300 hover:border-l-6 hover:bg-pink-50">
                        <h4 className="font-semibold text-lg text-pink-900">Unpleasant (Dukkha)</h4>
                        <p className="mt-2 text-pink-950">Disagreeable sensations that we naturally tend to avoid or resist, creating aversion.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-pink-300 transition-all duration-300 hover:border-l-6 hover:bg-pink-50">
                        <h4 className="font-semibold text-lg text-pink-900">Neutral (Adukkhamasukha)</h4>
                        <p className="mt-2 text-pink-950">Neither pleasant nor unpleasant sensations that we tend to ignore or be unaware of, creating ignorance.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-pink-900 border-b border-pink-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-pink-700 mt-2"></span>
                        <span>Arises from contact (phassa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-pink-700 mt-2"></span>
                        <span>Conditions craving (taṇhā)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-pink-700 mt-2"></span>
                        <span>Present in all experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-pink-700 mt-2"></span>
                        <span>Impermanent and constantly changing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-pink-800 border-t border-pink-100 pt-4 text-center">
                    "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor." — Thich Nhat Hanh
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-pink-100 bg-pink-50/30">
                <Button color="danger" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="danger" className="font-medium">
                  <FaBalanceScale className="mr-2" /> Observe Equanimously
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};