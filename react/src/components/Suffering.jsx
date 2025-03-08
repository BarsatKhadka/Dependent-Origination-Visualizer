import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const Suffering = () => {
    return (
        
        <div className= "border-2 border-black rounded-md lg:px-16 lg:py-8 px-2 py-2">
                    
                                     <Handle
                                            type="target"
                                            position={Position.Bottom}
                                            id="left"
                                            style={{ background: '#555', width: '10px', height: '10px' }}
                                            />
                                
            <p className= "lg:text-2xl text-gray-800">Suffering </p>
            <p className= "text-gray-600 italic lg:ml-4">(Dukkha)</p>
        </div>

    )
}