import React, { useEffect, useState, useCallback } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { getInitialNodes } from './data/initialNode';
import { initialEdges } from './data/initialEdges';
import { nodeTypes } from './data/nodeTypes';
import { styles } from './ui/styles';
import useStore from '../store';

export function Flow() {
    const { darkMode } = useStore();
    const [dimensions, setDimensions] = useState({ 
        width: window.innerWidth, 
        height: window.innerHeight 
    });
    
    const [nodes, setNodes] = useState(getInitialNodes(dimensions));
    const [edges, setEdges] = useState(initialEdges);
   
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
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

    // Update nodes when dimensions change
    useEffect(() => {
        setNodes(getInitialNodes(dimensions));
    }, [dimensions]);

    return (
        <div style={{ height: '100%', width: '100%', color: darkMode ? '#ffffff' : '#000000' }}>
            <ReactFlow 
                nodes={nodes} 
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView={true}
                colorMode={darkMode ? 'dark' : 'light'}
                style={styles}
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