const counter = (state = 100,action) => {
    switch (action.type){
        case 'INCREMENT_BY_1':
            return state + 1;
        case 'DECREMENT_BY_1':
            return state - 1;
        default:
            return state;
    }
} 

export default counter;