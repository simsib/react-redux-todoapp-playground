const counter = (state = 100,action) => {
    switch (action.type){
        case 'INCREMENT_BY_1': // obsolete
            return state + 1;
        case 'DECREMENT_BY_1': // obsolete
            return state - 1;
        case 'INCREMENT_BY_VALUE':
            return state + action.value;
        case 'DECREMENT_BY_VALUE':
            return state - action.value;
        case 'MULTIPLY_BY_VALUE':
            return state * action.value
        default:
            return state;
    }
} 

export default counter;