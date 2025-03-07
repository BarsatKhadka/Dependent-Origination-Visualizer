import React from 'react';
import { Handle, Position } from '@xyflow/react';


export const Consciousness3 = () => {
    return (
        <div className="border-2 border-black rounded-md px-16 py-8 relative">
            <Handle
                    type="target"
                    position={Position.Bottom}
                    id="bottom"
                    style={{ background: '#555', width: '10px', height: '10px' }}
                  />
                  <Handle
                    type="source"
                    position={Position.Bottom}
                    id="top"
                    style={{ background: '#555', width: '10px', height: '10px' }}
                  />
            <p className="text-2xl text-gray-800">Consciousness</p>
            <p className="text-gray-600 italic ml-4">(Viññāṇa)</p>
        </div>
    )
}