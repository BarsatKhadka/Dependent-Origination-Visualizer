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


export const Suffering = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
        <div
            className="border-2 border-amber-700 rounded-lg shadow-md lg:px-16 lg:py-10 px-4 py-3 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:bg-amber-50 cursor-pointer"
            onClick={onOpen}
        >
            <Handle
                type="target"
                position={Position.Bottom}
                id="left"
                style={{ background: '#78350f', width: '12px', height: '12px' }}
            />
            <div className="flex flex-col items-center">
                <p className="lg:text-3xl text-xl font-semibold text-amber-900">Suffering</p>
                <p className="text-amber-700 italic lg:ml-4">(Dukkha)</p>
            </div>
        </div>

            <Drawer 
                isOpen={isOpen} 
                onClose={onClose} 
                size="full"
                classNames={{
                    base: "shadow-none",
                    wrapper: "w-full",
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
                            <DrawerHeader className="flex flex-col gap-1 bg-white border-b border-amber-100">
                                <h2 className="text-3xl font-bold text-amber-900">Dukkha (दुक्ख)</h2>
                                <p className="text-amber-700">The First Noble Truth</p>
                            </DrawerHeader>
                            
                            <DrawerBody className="bg-white">
                                <div className="space-y-8 p-2 max-w-4xl mx-auto">
                                    <p className="text-xl leading-relaxed">
                                         Suffering is fundamental unsatisfactoriness in life.
                                    </p>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2">Three Types of Dukkha:</h3>
                                        <ul className="space-y-4">
                                            <li className="p-5 bg-white border-l-4 border-amber-300">
                                                <h4 className="font-semibold text-lg text-amber-900">Dukkha-dukkha (दुःख-दुःख)</h4>
                                                <p className="mt-2">Obvious physical and mental suffering</p>
                                            </li>
                                            <li className="p-5 bg-white border-l-4 border-amber-300">
                                                <h4 className="font-semibold text-lg text-amber-900">Viparinama-dukkha (विपरिणाम-दुःख)</h4>
                                                <p className="mt-2">Suffering due to change</p>
                                            </li>
                                            <li className="p-5 bg-white border-l-4 border-amber-300">
                                                <h4 className="font-semibold text-lg text-amber-900">Sankhara-dukkha (संखार-दुःख)</h4>
                                                <p className="mt-2">Subtle suffering of conditioned existence</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2">Key Manifestations:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
                                            <li className="flex items-center gap-2">• Birth, aging, illness, and death</li>
                                            <li className="flex items-center gap-2">• Separation from the pleasant</li>
                                            <li className="flex items-center gap-2">• Association with the unpleasant</li>
                                            <li className="flex items-center gap-2">• Not getting what one wants</li>
                                            <li className="flex items-center gap-2">• The five clinging aggregates</li>
                                        </ul>
                                    </div>
                                </div>
                            </DrawerBody>

                            <DrawerFooter className="border-t border-amber-100 bg-white">
                                <Button color="warning" variant="light" onPress={onClose} className="font-medium">
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