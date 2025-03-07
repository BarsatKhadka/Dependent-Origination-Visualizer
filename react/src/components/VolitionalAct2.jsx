import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const VolitionalAct2 = () => {
  return (
    <div className="border-2 border-black rounded-md lg:px-16 lg:py-8 px-2 py-2 relative">
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
      <p className="lg:text-2xl text-gray-800">Volitional Act</p>
      <p className="text-gray-600 italic lg:ml-4">(Saṅkhāra)</p>
    </div>
  );
};