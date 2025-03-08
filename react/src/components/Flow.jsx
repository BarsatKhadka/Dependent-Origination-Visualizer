import React, { useEffect } from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { getInitialNodes } from './data/initialNode';
import { initialEdges } from './data/initialEdges';
import { nodeTypes } from './data/nodeTypes';
import useStore from '../store';



export function Flow() {

    const {darkMode, setDarkMode} = useStore();

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


    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlow 
            nodes={getInitialNodes(dimensions)} 
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView={true}
            colorMode= {darkMode ? 'dark' : 'light'}
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