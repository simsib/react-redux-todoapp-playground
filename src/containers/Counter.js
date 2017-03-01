import { connect } from 'react-redux';
import { incrementByValue,decrementByValue,multiplyByValue } from '../actions';
import CounterControl from '../components/CounterControl';

const mapStateToProps = (state) => {
    return {
        counter: state.wololoCounter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementByValue: (value) => {
            dispatch(incrementByValue(value));
        },
        onDecrementByValue: (value) => {
            dispatch(decrementByValue(value));
        },
        onMultiplyByValue: (value) => {
            dispatch(multiplyByValue(value));
        }
    }
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterControl);

export default CounterContainer;