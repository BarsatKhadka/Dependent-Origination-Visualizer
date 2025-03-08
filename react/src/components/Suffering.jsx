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
import { FaDharmachakra } from "react-icons/fa6";


export const Suffering = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
        <div
            className="border-2 border-amber-700 rounded-lg shadow-md lg:px-16 lg:py-10 px-4 py-3 flex flex-col items-center transition-all duration-500 hover:shadow-lg hover:bg-amber-50 cursor-pointer relative group"
            onClick={onOpen}
            style={
                {
                    backgroundColor: 'white',
                    color: 'black',
                }
            }
        >
            <Handle
                type="target"
                position={Position.Bottom}
                id="left"
                style={{ background: '#78350f', width: '12px', height: '12px' }}
            />
            <div className="flex flex-col items-center">
                <p className="lg:text-3xl text-xl font-semibold text-amber-900">Suffering</p>
                <p className="text-amber-700 italic lg:ml-4 mb-2">(Dukkha)</p>
                <div className="mt-3 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-amber-200 shadow-sm">
                    <span style={{ 
                        fontFamily: "'Cinzel'Palatino Linotype', 'Book Antiqua', Palatino, serif",
                        letterSpacing: "1px"
                    }}>explore</span>
                    <FaDharmachakra />
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
                                <h2 className="text-3xl font-bold text-amber-900">Dukkha (दुक्ख)</h2>
                                <p className="text-amber-700">The First Noble Truth</p>
                            </DrawerHeader>
                            
                            <DrawerBody className="bg-amber-50/20">
                                <div className="space-y-8 p-4 max-w-4xl mx-auto">
                                    <p className="text-xl leading-relaxed text-amber-950">
                                        Suffering (dukkha) is the fundamental unsatisfactoriness that pervades all existence. It is not merely pain, but a deeper sense that even in pleasant experiences, there is impermanence and incompleteness.
                                    </p>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2">Three Types of Dukkha:</h3>
                                        <ul className="space-y-6">
                                            <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6">
                                                <h4 className="font-semibold text-lg text-amber-900">Dukkha-dukkha (दुःख-दुःख)</h4>
                                                <p className="mt-2 text-amber-950">The obvious suffering of physical and mental pain, illness, and distress that all beings experience.</p>
                                            </li>
                                            <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6">
                                                <h4 className="font-semibold text-lg text-amber-900">Viparinama-dukkha (विपरिणाम-दुःख)</h4>
                                                <p className="mt-2 text-amber-950">The suffering of change—the distress that arises when pleasant experiences inevitably transform or end.</p>
                                            </li>
                                            <li className="p-5 bg-white border-l-4 border-amber-300 transition-all duration-300 hover:border-l-6">
                                                <h4 className="font-semibold text-lg text-amber-900">Sankhara-dukkha (संखार-दुःख)</h4>
                                                <p className="mt-2 text-amber-950">The subtle, pervasive suffering of conditioned existence—the unsatisfactoriness inherent in all phenomena that arise from causes and conditions.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-amber-900 border-b border-amber-100 pb-2">Key Manifestations:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                                            <li className="flex items-start gap-2">
                                                <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                                                <span>Birth, aging, illness, and death</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                                                <span>Separation from the pleasant</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                                                <span>Association with the unpleasant</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                                                <span>Not getting what one wants</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="h-2 w-2 rounded-full bg-amber-700 mt-2"></span>
                                                <span>The five clinging aggregates (form, feeling, perception, mental formations, and consciousness)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="italic text-amber-800 border-t border-amber-100 pt-4 text-center">
                                        "All conditioned things are unsatisfactory." — The Buddha
                                    </div>
                                </div>
                            </DrawerBody>

                            <DrawerFooter className="border-t border-amber-100 bg-amber-50/30">
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