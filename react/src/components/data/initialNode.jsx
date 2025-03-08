export const getInitialNodes = (dimensions) => [
    { 
        id: '0', 
        type: 'suffering', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.59 : dimensions.width * 0.42, 
            y: dimensions.width < 640 && dimensions.height < 1100 ?  dimensions.height * 0.39 : dimensions.height * 0.5 
        }
    },
    { 
        id: '1', 
        type: 'ignorance', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.90 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.6 : dimensions.height * 0.8
        }
    },
    { 
        id: '2', 
        type: 'formations', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.88 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.48 : dimensions.height * 0.6
        }
    },
    { 
        id: '3', 
        type: 'consciousness', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.85 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.29 : dimensions.height * 0.35 
        }
    },
    { 
        id: '4', 
        type: 'nameAndForm', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.83 : dimensions.width * 0.69, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.16 : dimensions.height * 0.15 
        }
    },
    { 
        id: '5', 
        type: 'sixSenses', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.73 : dimensions.width * 0.5, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.01 : dimensions.height * 0.15 
        }
    },
    { 
        id: '6', 
        type: 'contact', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.46 : dimensions.width * 0.32, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.01 : dimensions.height * 0.15 
        }
    },
    { 
        id: '7', 
        type: 'feeling', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.16 : dimensions.height * 0.15 
        }
    },
    { 
        id: '8', 
        type: 'craving', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.29 : dimensions.height * 0.35 
        }
    },
    { 
        id: '9', 
        type: 'clinging', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.48 : dimensions.height * 0.6 
        }
    },
    { 
        id: '10', 
        type: 'becoming', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.25 : dimensions.width * 0.13, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.6 : dimensions.height * 0.8 
        }
    },
    { 
        id: '11', 
        type: 'birth', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.45 : dimensions.width * 0.34, 
            y: dimensions.width < 640 && dimensions.height < 1100 ? dimensions.height * 0.75 : dimensions.height * 0.8 
        }
    },
    { 
        id: '12', 
        type: 'agingAndDeath', 
        position: { 
            x: dimensions.width < 640 ? dimensions.width * 0.73 : dimensions.width * 0.5, 
            y: dimensions.width < 640 && dimensions.height < 1100? dimensions.height * 0.75 : dimensions.height * 0.8 
        }
    }
];