import React, { useEffect } from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Suffering } from './Suffering';
import { Ignorance1 } from './Ignorance1';
import { VolitionalAct2 } from './VolitionalAct2';
import { Consciousness3 } from './Consciousness3';
import { NameAndForm4 } from './NameAndForm4';
import { SixSenses5 } from './SixSenses5';
import { Contact6 } from './Contact6';
import { Feeling7 } from './Feeling7';
import { Craving8 } from './Craving8';
import { Clinging9 } from './Clinging9';
import { Becoming10 } from './Becoming10';
import { Birth11 } from './Birth11';
import { AgingAndDeath12 } from './AgingAndDeath12';

export function Flow() {
    const [dimensions, setDimensions] = React.useState(
        { width: window.innerWidth, height: window.innerHeight }
    );

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nodeTypes = {
        suffering: Suffering,
        ignorance: Ignorance1,
        formations: VolitionalAct2,
        consciousness: Consciousness3,
        nameAndForm: NameAndForm4,
        sixSenses: SixSenses5,
        contact: Contact6,
        feeling: Feeling7,
        craving: Craving8,
        clinging: Clinging9,
        becoming: Becoming10,
        birth: Birth11,
        agingAndDeath: AgingAndDeath12,
    };
    const initialNodes = [
        { 
            id: '0', 
            type: 'suffering', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.59 : dimensions.width * 0.42, 
                y: dimensions.width < 640 && dimensions.height < 1100 ?  dimensions.height * 0.39 : dimensions.height * 0.5 
            }
        },
        { 
            id: '1', 
            type: 'ignorance', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.90 : dimensions.width * 0.69, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.6 : dimensions.height * 0.8
            }
        },
        { 
            id: '2', 
            type: 'formations', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.88 : dimensions.width * 0.69, 
                y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.48 : dimensions.height * 0.6
            }
        },
        { 
            id: '3', 
            type: 'consciousness', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.85 : dimensions.width * 0.69, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.29 : dimensions.height * 0.35 
            }
        },
        { 
            id: '4', 
            type: 'nameAndForm', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.83 : dimensions.width * 0.69, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.16 : dimensions.height * 0.15 
            }
        },
        { 
            id: '5', 
            type: 'sixSenses', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.73 : dimensions.width * 0.5, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.01 : dimensions.height * 0.15 
            }
        },
        { 
            id: '6', 
            type: 'contact', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.46 : dimensions.width * 0.32, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.01 : dimensions.height * 0.15 
            }
        },
        { 
            id: '7', 
            type: 'feeling', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.16 : dimensions.height * 0.15 
            }
        },
        { 
            id: '8', 
            type: 'craving', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.29 : dimensions.height * 0.35 
            }
        },
        { 
            id: '9', 
            type: 'clinging', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.48 : dimensions.height * 0.6 
            }
        },
        { 
            id: '10', 
            type: 'becoming', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.6 : dimensions.height * 0.8 
            }
        },
        { 
            id: '11', 
            type: 'birth', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.45 : dimensions.width * 0.34, 
                y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.75 : dimensions.height * 0.8 
            }
        },
        { 
            id: '12', 
            type: 'agingAndDeath', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.73 : dimensions.width * 0.5, 
                y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.75 : dimensions.height * 0.8 
            }
        }
    ];

    // Define edges for the 12 links of dependent origination
    const initialEdges = [
        // Main cycle edges - following the traditional order
        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Ignorance → Volitional Acts
        { id: 'e2-3', source: '2', target: '3', animated: false, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Volitional Acts → Consciousness
        { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Consciousness → Name and Form
        { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Name and Form → Six Senses
        { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Six Senses → Contact
        { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Contact → Feeling
        { id: 'e7-8', source: '7', target: '8', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Feeling → Craving
        { id: 'e8-9', source: '8', target: '9', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Craving → Clinging
        { id: 'e9-10', source: '9', target: '10', animated: false, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Clinging → Becoming
        { id: 'e10-11', source: '10', target: '11', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Becoming → Birth
        { id: 'e11-12', source: '11', target: '12', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Birth → Aging and Death
        { id: 'e12-0', source: '12', target: '0', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Aging and Death → Suffering
        { id: 'e0-1', source: '0', target: '1', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Suffering → Ignorance (completing the cycle)
        
        
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow 
            nodes={initialNodes} 
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView={true}
            fitViewOptions={{
                padding: window.innerWidth < 640 ? 0.2 : 0.5,
                minZoom: window.innerWidth < 640 ? 0.3 : 0.5,
                maxZoom: 2
            }}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}