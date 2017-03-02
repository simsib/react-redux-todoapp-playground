import { connect } from 'react-redux';
import { incrementByValue,decrementByValue,multiplyByValue,divideByValue,updateStep } from '../actions';
import CounterControl from '../components/CounterControl';

const returnIntFromInput = (input) => {
    let result = parseInt(input);
    return result?result:0;
}

const mapStateToProps = (state) => {
    return {
        counter: state.wololoCounter,
        incrementStep: state.incrementStep
    }
}
const mapDispatchToProps = (dispatch) => {
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

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterControl);

export default CounterContainer;