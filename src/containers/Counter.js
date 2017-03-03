import {connect} from 'react-redux';
import Counter from '../components/Counter';

const mapState = (state) => {
    return {
        counter: state.wololoCounter
    }
}

const CounterContainer = connect (mapState)(Counter);

export default CounterContainer;