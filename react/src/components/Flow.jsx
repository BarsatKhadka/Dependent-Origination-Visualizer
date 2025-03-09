import React, { useEffect, useState, useCallback} from 'react';
import { ReactFlow, Controls, Background , MiniMap, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { getInitialNodes } from './data/initialNode';
import { initialEdges } from './data/initialEdges';
import { nodeTypes } from './data/nodeTypes';
import { styles } from './ui/styles';
import useStore from '../store';



export function Flow() {

    const {darkMode, setDarkMode} = useStore();

     
    const [dimensions, setDimensions] = React.useState(
        { width: window.innerWidth, height: window.innerHeight }
    );

    const [showMiniMap, setShowMiniMap] = React.useState(window.innerWidth >= 768);

    
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
            setShowMiniMap(window.innerWidth >= 768); 
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //update nodes with new dimension when node change
    useEffect(() => {
        setNodes(getInitialNodes(dimensions));
    }, [dimensions]);

    return (
        <div style={{ height: '100%', width: '100%', color: darkMode ? '#ffffff' : '#000000' }}
        >
            
            <ReactFlow 
            nodes={nodes} 
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView={true}
            colorMode= {darkMode ? 'dark' : 'light'}
            style={styles}
            fitViewOptions={{
                padding: window.innerWidth < 640 ? 0.2 : 0.5,
                minZoom: window.innerWidth < 640 ? 0.3 : 0.5,
                maxZoom: 2
            }}
            >
                {showMiniMap && (
                    <MiniMap 
                        style={{
                            bottom: 0,
                            left: 30,
                            right: 'auto'
                        }}
                        zoomable 
                        pannable
                    />
                )}
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}
