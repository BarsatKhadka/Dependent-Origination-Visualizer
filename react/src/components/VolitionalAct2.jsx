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

export const VolitionalAct2 = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <div 
        className="border-2 border-black rounded-md lg:px-16 lg:py-8 px-2 py-2 relative cursor-pointer"
        onClick={onOpen}
      >
        <Handle
          type="target"
          position={Position.Bottom}
          id="bottom"
          style={{ background: '#555', width: '10px', height: '10px' }}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top"
          style={{ background: '#555', width: '10px', height: '10px' }}
        />
        <p className="lg:text-2xl text-gray-800">Volitional Act</p>
        <p className="text-gray-600 italic lg:ml-4">(Saṅkhāra)</p>
      </div>

      <Drawer isOpen={isOpen} onClose={onClose} size="lg">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Saṅkhāra (संस्कार)</h2>
                <p className="text-gray-500">Volitional Formations</p>
              </DrawerHeader>
              
              <DrawerBody>
                <div className="space-y-6">
                  <p className="text-lg">
                    Saṅkhāra refers to volitional formations or mental constructs that shape our karma and future experiences.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Three Types of Saṅkhāra:</h3>
                    <ul className="space-y-4">
                      <li className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Kāya-saṅkhāra</h4>
                        <p>Bodily formations - physical actions and their intentional basis</p>
                      </li>
                      <li className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Vacī-saṅkhāra</h4>
                        <p>Verbal formations - speech and verbal actions</p>
                      </li>
                      <li className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Citta-saṅkhāra</h4>
                        <p>Mental formations - thoughts, intentions, and mental states</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Aspects:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Intentional actions that create karma</li>
                      <li>Mental conditioning and habitual patterns</li>
                      <li>Volition and decision-making processes</li>
                      <li>Formation of future experiences</li>
                      <li>Conditioning of consciousness</li>
                    </ul>
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};