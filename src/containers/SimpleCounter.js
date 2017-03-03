import { connect } from 'react-redux';
import { incrementByValue, decrementByValue } from '../actions';
import SimpleCounterControl from '../components/SimpleCounterControl';

const returnIntFromInput = (input) => {
    let result = parseInt(input);
    return result?result:0;
}

const mapState = (state) => {
    return {
        counter: state.wololoCounter
    }
}

const mapDispatch = (dispatch) => {
    return {
        onIncrementByValue: (value) => {
            dispatch(incrementByValue(returnIntFromInput(value)));
        },
        onDecrementByValue: (value) => {
            dispatch(decrementByValue(returnIntFromInput(value)));
        }
    }
}

const SimpleCounterContainer = connect(
    mapState, mapDispatch
)(SimpleCounterControl);

export default SimpleCounterContainer;