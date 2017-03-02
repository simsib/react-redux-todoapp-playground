const counterStep = (state = 1, action) => {
    switch (action.type) {
        case 'UPDATE_STEP':
            return action.step;
        default:
            return state;
    }
}

export default counterStep;