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
                x: dimensions.width < 640 ? dimensions.width * 0.60 : dimensions.width * 0.42, 
                y: dimensions.height * 0.5 
            }
        },
        { 
            id: '1', 
            type: 'ignorance', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.9 : dimensions.width * 0.69, 
                y: dimensions.height < 640 ? dimensions.height * 0.1 : dimensions.height * 0.8
            }
        },
        { 
            id: '2', 
            type: 'formations', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.75 : dimensions.width * 0.69, 
                y: dimensions.height * 0.6 
            }
        },
        { 
            id: '3', 
            type: 'consciousness', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.75 : dimensions.width * 0.69, 
                y: dimensions.height * 0.35 
            }
        },
        { 
            id: '4', 
            type: 'nameAndForm', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.75 : dimensions.width * 0.69, 
                y: dimensions.height * 0.15 
            }
        },
        { 
            id: '5', 
            type: 'sixSenses', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.60 : dimensions.width * 0.5, 
                y: dimensions.height * 0.15 
            }
        },
        { 
            id: '6', 
            type: 'contact', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.45 : dimensions.width * 0.32, 
                y: dimensions.height * 0.15 
            }
        },
        { 
            id: '7', 
            type: 'feeling', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.height * 0.15 
            }
        },
        { 
            id: '8', 
            type: 'craving', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.height * 0.35 
            }
        },
        { 
            id: '9', 
            type: 'clinging', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.height * 0.6 
            }
        },
        { 
            id: '10', 
            type: 'becoming', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
                y: dimensions.height * 0.8 
            }
        },
        { 
            id: '11', 
            type: 'birth', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.45 : dimensions.width * 0.34, 
                y: dimensions.height * 0.8 
            }
        },
        { 
            id: '12', 
            type: 'agingAndDeath', 
            position: { 
                x: dimensions.width < 640 ? dimensions.width * 0.60 : dimensions.width * 0.5, 
                y: dimensions.height * 0.8 
            }
        }
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow 
            nodes={initialNodes} 
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