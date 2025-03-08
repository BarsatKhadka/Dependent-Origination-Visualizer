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
import { FaBaby, FaHeart } from "react-icons/fa";

export const Birth11 = () => {
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
          position={Position.Left}
          id="left"
          style={{ background: '#1d4ed8', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right"
          style={{ background: '#1d4ed8', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-blue-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Birth</p>
          <p className="text-blue-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Jāti)</p>
          <div className="mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-blue-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>EMERGENCE</span>
            <FaBaby className="text-blue-700" />
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
                  <FaBaby className="text-blue-700 text-xl" />
                  <h2 className="text-3xl font-bold text-blue-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Jāti (जाति)</h2>
                </div>
                <p className="text-blue-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Birth - The Emergence of a New Existence</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-blue-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-blue-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Jāti refers to birth or the coming into existence of the psycho-physical organism. In the context of dependent origination, it represents the manifestation of the five aggregates (form, feeling, perception, mental formations, and consciousness) that constitute a being.
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b border-blue-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Aspects of Birth:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Physical Birth</h4>
                        <p className="mt-2 text-blue-950">The physical emergence of a being into a particular realm of existence, including conception, gestation, and delivery in the human realm.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Mental Birth</h4>
                        <p className="mt-2 text-blue-950">The arising of a new mental state or identity, including the formation of self-concept and the establishment of a new psychological existence.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-blue-300 transition-all duration-300 hover:border-l-6 hover:bg-blue-50">
                        <h4 className="font-semibold text-lg text-blue-900">Moment-to-Moment Birth</h4>
                        <p className="mt-2 text-blue-950">The continuous arising of new experiences and mental states in each moment, representing the ongoing process of becoming in the present life.</p>
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
                        <span>Arises from becoming (bhava)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Conditions aging and death (jarāmaraṇa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Manifests the five aggregates of clinging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-700 mt-2"></span>
                        <span>Brings inherent suffering through impermanence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-blue-800 border-t border-blue-100 pt-4 text-center">
                    "Birth is suffering, aging is suffering, death is suffering; sorrow, lamentation, pain, grief, and despair are suffering." — The Buddha's First Noble Truth
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-blue-100 bg-blue-50/30">
                <Button color="primary" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="primary" className="font-medium">
                  <FaHeart className="mr-2" /> Contemplate Impermanence
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};