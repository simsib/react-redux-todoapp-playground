const counterStep = (state = 2, action) => {
    switch (action.type) {
        case 'UPDATE_STEP':
            return action.step;
        default:
            return state;
    }
}

export default counterStep;