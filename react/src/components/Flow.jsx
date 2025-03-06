import React , {useEffect} from 'react';
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Suffering } from './Suffering';

export function Flow() {
    const [dimensions, setDimensions] = React.useState(
        {width: window.innerWidth, height: window.innerHeight}
    );
    useEffect(() => {
      const handleResize = () => {
        setDimensions({width: window.innerWidth, height: window.innerHeight})
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }

    
  },[])

    const nodeTypes = {suffering: Suffering}
    
    const initialNodes = [
      { id: '1', type: 'suffering', position: { x: dimensions.width / 2 -100, y: dimensions.height / 2 -100 } },
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