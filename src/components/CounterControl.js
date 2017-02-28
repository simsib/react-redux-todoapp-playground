import React, {PropTypes} from 'react';

const CounterControl = ({counter,onIncrement1,onDecrement}) => (
    <div>
        <p> {counter} </p>
        <button onClick={()=>onIncrement1()}>+</button>
        <button onClick={()=>onDecrement()}>-</button>
    </div>
);

CounterControl.propTypes = {
    counter:  PropTypes.number.isRequired,
    onIncrement1: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default CounterControl;
