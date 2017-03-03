import { connect } from 'react-redux';
import { incrementByValue, decrementByValue, multiplyByValue, divideByValue, updateStep } from '../actions';
import AdvancedCounter from '../components/AdvancedCounter';

const returnIntFromInput = (input) => {
    let result = parseInt(input);
    return result?result:0;
}

const mapState = (state) => {
    return {
        counter: state.wololoCounter,
        incrementStep: state.incrementStep
    }
}

const mapDispatch = (dispatch) => {
    return {
        onIncrementByValue: (value) => {
            dispatch(incrementByValue(returnIntFromInput(value)));
        },
        onDecrementByValue: (value) => {
            dispatch(decrementByValue(returnIntFromInput(value)));
        },
        onMultiplyByValue: (value) => {
            dispatch(multiplyByValue(returnIntFromInput(value)));
        },
        onDivideByValue: (value) => {
            dispatch(divideByValue(returnIntFromInput(value)));
        },
        onUpdateStep: (value) => {
            dispatch(updateStep(returnIntFromInput(value)));
        }
    }
}

const AdvancedCounterContainer = connect (
    mapState,mapDispatch
)(AdvancedCounter);

export default AdvancedCounterContainer;