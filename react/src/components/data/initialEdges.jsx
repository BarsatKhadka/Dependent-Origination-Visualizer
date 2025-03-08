export const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Ignorance → Volitional Acts
    { id: 'e2-3', source: '2', target: '3', animated: false, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Volitional Acts → Consciousness
    { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Consciousness → Name and Form
    { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Name and Form → Six Senses
    { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Six Senses → Contact
    { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Contact → Feeling
    { id: 'e7-8', source: '7', target: '8', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Feeling → Craving
    { id: 'e8-9', source: '8', target: '9', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } },  // Craving → Clinging
    { id: 'e9-10', source: '9', target: '10', animated: false, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Clinging → Becoming
    { id: 'e10-11', source: '10', target: '11', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Becoming → Birth
    { id: 'e11-12', source: '11', target: '12', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Birth → Aging and Death
    { id: 'e12-0', source: '12', target: '0', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Aging and Death → Suffering
    { id: 'e0-1', source: '0', target: '1', animated: true, style: { stroke: '#6B5B95', strokeWidth: 2 } }, // Suffering → Ignorance (completing the cycle)
];