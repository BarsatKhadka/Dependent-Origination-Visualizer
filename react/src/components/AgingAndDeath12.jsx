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
import { FaHourglassEnd, FaDove } from "react-icons/fa";

export const AgingAndDeath12 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-gray-500 rounded-md lg:px-16 lg:py-8 px-2 py-2 flex flex-col items-center relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        onClick={onOpen}
        style={
          {
            backgroundColor: '#f5f5f5',
            borderColor: '#6b7280',
            color: 'black',
          }
        }
        onMouseEnter={(e) =>{
          e.currentTarget.style.backgroundColor = '#f9fafb'
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.backgroundColor = '#f5f5f5'
        }}
      >
        <Handle
          type="target"
          position={Position.Left}
          id="left"
          style={{ background: '#374151', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top"
          style={{ background: '#374151', width: '10px', height: '10px' }}
        />
        <div className="flex flex-col items-center">
          <p className="lg:text-2xl text-base font-semibold text-gray-900" style={{ 
            fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
          }}>Aging & Death</p>
          <p className="text-gray-700 italic lg:ml-4 text-sm lg:text-base" style={{ 
            fontFamily: "'Spectral', 'Georgia', serif",
          }}>(Jarāmaraṇa)</p>
          <div className="mt-3 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-gray-200 shadow-sm">
            <span style={{ 
              fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
              letterSpacing: "1px"
            }}>IMPERMANENCE</span>
            <FaHourglassEnd className="text-gray-700" />
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
              <DrawerHeader className="flex flex-col gap-1 bg-gray-50/50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FaHourglassEnd className="text-gray-700 text-xl" />
                  <h2 className="text-3xl font-bold text-gray-900" style={{ 
                    fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                  }}>Jarāmaraṇa (जरामरण)</h2>
                </div>
                <p className="text-gray-700" style={{ 
                  fontFamily: "'Spectral', 'Georgia', serif",
                }}>Aging and Death - The Culmination of the Cycle</p>
              </DrawerHeader>
              
              <DrawerBody className="bg-gray-50/20">
                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-gray-950" style={{ 
                    fontFamily: "'Spectral', 'Georgia', serif",
                  }}>
                    Jarāmaraṇa refers to aging and death, the final link in the chain of dependent origination. It represents the inevitable decay and dissolution of the psycho-physical organism that was born through the process of birth (jāti).
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 border-b border-gray-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Two Components:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Aging (Jarā)</h4>
                        <p className="mt-2 text-gray-950">The process of growing old, characterized by the decay of faculties, loss of vitality, weakening of the sense organs, and the gradual deterioration of the body and mind.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Death (Maraṇa)</h4>
                        <p className="mt-2 text-gray-950">The end of the life faculty, the breaking up of the aggregates, the discarding of the body, and the cutting off of the life force that results in the termination of a particular life.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 border-b border-gray-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Manifestations of Suffering:</h3>
                    <ul className="space-y-6">
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Sorrow (Soka)</h4>
                        <p className="mt-2 text-gray-950">The mental pain and grief experienced when confronted with loss, separation, and the inevitability of death.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Lamentation (Parideva)</h4>
                        <p className="mt-2 text-gray-950">The verbal expressions of grief, wailing, and crying out in response to suffering and loss.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Pain (Dukkha)</h4>
                        <p className="mt-2 text-gray-950">The physical discomfort and suffering associated with aging, illness, and the process of dying.</p>
                      </li>
                      <li className="p-5 bg-white border-l-4 border-gray-300 transition-all duration-300 hover:border-l-6 hover:bg-gray-50">
                        <h4 className="font-semibold text-lg text-gray-900">Grief (Domanassa)</h4>
                        <p className="mt-2 text-gray-950">The mental anguish, depression, and despair that arise from confronting mortality and loss.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 border-b border-gray-100 pb-2" style={{ 
                      fontFamily: "'Philosopher', 'Palatino Linotype', 'Book Antiqua', serif",
                    }}>Key Aspects:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-gray-700 mt-2"></span>
                        <span>Arises from birth (jāti)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-gray-700 mt-2"></span>
                        <span>Completes the cycle of dependent origination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-gray-700 mt-2"></span>
                        <span>Inevitable for all conditioned beings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-gray-700 mt-2"></span>
                        <span>Can be transcended through the cessation of ignorance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="italic text-gray-800 border-t border-gray-100 pt-4 text-center">
                    "All conditioned things are impermanent. When one sees this with wisdom, one turns away from suffering. This is the path to purification." — Dhammapada 277
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-gray-100 bg-gray-50/30">
                <Button color="default" variant="light" onPress={onClose} className="font-medium">
                  Close
                </Button>
                <Button color="default" className="font-medium">
                  <FaDove className="mr-2" /> Reflect on Impermanence
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};