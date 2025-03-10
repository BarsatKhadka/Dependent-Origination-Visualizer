export const getInitialNodes = (dimensions) => [
    { 
        id: '0', 
        type: 'suffering', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.59 : dimensions.width * 0.42, 
            y: dimensions.width < 640 && dimensions.height < 1100 ?  dimensions.height * 0.39 : dimensions.height * 0.5 
        },
        draggable: true
    },
    { 
        id: '1', 
        type: 'ignorance', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.99 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.99 : dimensions.height * 0.8
        },
        draggable: true,
        
    },
    { 
        id: '2', 
        type: 'formations', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.99 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.80 : dimensions.height * 0.6
        },
        draggable: true,
        
    },
    { 
        id: '3', 
        type: 'consciousness', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.99 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.60 : dimensions.height * 0.35 
        },
        draggable: true
    },
    { 
        id: '4', 
        type: 'nameAndForm', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.999 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.20 : dimensions.height * 0.15 
        },
        draggable: true
    },
    { 
        id: '5', 
        type: 'sixSenses', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.99 : dimensions.width * 0.5, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.02 : dimensions.height * 0.15 
        },
        draggable: true
    },
    { 
        id: '6', 
        type: 'contact', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.30 : dimensions.width * 0.32, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0 : dimensions.height * 0.15 
        },
        draggable: true
    },
    { 
        id: '7', 
        type: 'feeling', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.20 : dimensions.height * 0.15 
        },
        draggable: true
    },
    { 
        id: '8', 
        type: 'craving', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.35 : dimensions.height * 0.35 
        },
        draggable: true
    },
    { 
        id: '9', 
        type: 'clinging', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0: dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.50 : dimensions.height * 0.6 
        },
        draggable: true
    },
    { 
        id: '10', 
        type: 'becoming', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.65 : dimensions.height * 0.8 
        },
        draggable: true
    },
    { 
        id: '11', 
        type: 'birth', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0 : dimensions.width * 0.32, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.80 : dimensions.height * 0.8 
        },
        draggable: true
    },
    { 
        id: '12', 
        type: 'agingAndDeath', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.3 : dimensions.width * 0.5, 
            y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.99 : dimensions.height * 0.8 
        },
        draggable: true
    }
];