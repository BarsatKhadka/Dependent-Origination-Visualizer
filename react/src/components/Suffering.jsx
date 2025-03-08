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
            className="border border-gray-400  lg:px-16 lg:py-10 px-2 py-2 flex flex-col items-center"
            onClick={onOpen}
        >
            <Handle
                type="target"
                position={Position.Bottom}
                id="left"
                style={{ background: '#555', width: '12px', height: '12px' }}
            />
            <p className="lg:text-3xl text-xl font-semibold text-gray-900">Suffering</p>
            <p className="text-gray-700 italic lg:ml-4">(Dukkha)</p>
        </div>


            <Drawer isOpen={isOpen} onClose={onClose} size="lg">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold">Dukkha (दुक्ख)</h2>
                                <p className="text-gray-500">The First Noble Truth</p>
                            </DrawerHeader>
                            
                            <DrawerBody>
                                <div className="space-y-6">
                                    <p className="text-lg">
                                         Suffering is fundamental unsatisfactoriness in life.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Three Types of Dukkha:</h3>
                                        <ul className="space-y-4">
                                            <li className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-semibold">Dukkha-dukkha (दुःख-दुःख)</h4>
                                                <p>Obvious physical and mental suffering</p>
                                            </li>
                                            <li className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-semibold">Viparinama-dukkha (विपरिणाम-दुःख)</h4>
                                                <p>Suffering due to change</p>
                                            </li>
                                            <li className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-semibold">Sankhara-dukkha (संखार-दुःख)</h4>
                                                <p>Subtle suffering of conditioned existence</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Key Manifestations:</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Birth, aging, illness, and death</li>
                                            <li>Separation from the pleasant</li>
                                            <li>Association with the unpleasant</li>
                                            <li>Not getting what one wants</li>
                                            <li>The five clinging aggregates</li>
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