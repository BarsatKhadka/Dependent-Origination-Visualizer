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
import { FaCube, FaLayerGroup } from "react-icons/fa";

export const NameAndForm4 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-cyan-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#06b6d4',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#ecfeff'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#0e7490', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left"
          style={{ background: '#0e7490', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-cyan-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Name and Form</p>
          <p className="text-cyan-700 italic lg:ml-4 text-sm lg:text-base mb-2" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Nāmarūpa)</p>
          <div className="mt-3 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-cyan-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>not me</span>
            <FaCube className="text-cyan-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-cyan-50/50 border-b border-cyan-100">
                <div className="flex items-center gap-2">
                  <FaLayerGroup className="text-cyan-700 text-xl" />
                  <h2 className="text-3xl font-bold text-cyan-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Nāmarūpa (नामरूप)</h2>
                </div>
                <p className="text-cyan-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Name and Form - Mental and Physical Phenomena</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-cyan-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-cyan-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Nāmarūpa refers to the combination of mental (nāma) and physical (rūpa) phenomena that constitute our experience of self and world. It is the psycho-physical complex that emerges from consciousness.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-900 border-b border-cyan-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Two Components:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-cyan-300 transition-all duration-300 hover:border-l-6 hover:bg-cyan-50">
                        <h4 className="font-semibold text-lg text-cyan-900">Nāma (Name/Mind)</h4>
                        <p className="mt-2 text-cyan-950">The mental aspects including feeling (vedanā), perception (saññā), intention (cetanā), contact (phassa), and attention (manasikāra).</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-cyan-300 transition-all duration-300 hover:border-l-6 hover:bg-cyan-50">
                        <h4 className="font-semibold text-lg text-cyan-900">Rūpa (Form/Matter)</h4>
                        <p className="mt-2 text-cyan-950">The physical aspects including the four great elements (earth, water, fire, air) and all derived material phenomena.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-900 border-b border-cyan-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-700 mt-2"></span>
                        <span>Conditioned by consciousness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-700 mt-2"></span>
                        <span>Interdependent relationship of mind and matter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-700 mt-2"></span>
                        <span>Foundation for the six sense bases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-700 mt-2"></span>
                        <span>Not a permanent self or identity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-cyan-800 border-t border-cyan-100 pt-4 text-center">
                    "Like two sheaves of reeds leaning against each other, so mind and body are interdependent." — Buddhist teaching
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-cyan-100 bg-cyan-50/30">
                <Button color="primary" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="primary" className="font-medium">
                  <FaLayerGroup className="mr-2" /> Understand Interdependence
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};