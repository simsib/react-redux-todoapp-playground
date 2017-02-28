import { connect } from 'react-redux';
import { incrementBy1, decrementBy1 } from '../actions';
import CounterControl from '../components/CounterControl';

const mapStateToProps = (state) => {
    return {
        counter: state.wololoCounter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement1: () => {
            dispatch(incrementBy1());
        },
        onDecrement: () => {
            dispatch(decrementBy1());
        }
    }
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterControl);

export default CounterContainer;