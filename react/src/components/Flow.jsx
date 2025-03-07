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
        { id: '0', type: 'suffering', position: { x: dimensions.width / 2 - 100, y: dimensions.height / 2 - 100 }},
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}