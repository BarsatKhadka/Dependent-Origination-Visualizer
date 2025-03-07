import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const NameAndForm4 = () => {
    return (
        <div className="border-2 border-black rounded-md lg:px-16 lg:py-8 px-2 py-2">
            <Handle
                    type="target"
                    position={Position.Bottom}
                    id="bottom"
                    style={{ background: '#555', width: '10px', height: '10px' }}
                  />
            <Handle
                type="source"
                position={Position.Left}
                id="left"
                style={{ background: '#555', width: '10px', height: '10px' }}
                />
            <p className="lg:text-2xl text-gray-800">Name and Form</p>
            <p className="text-gray-600 italic lg:ml-4">(Nāmarūpa)</p>
        </div>
    )
}