import React from 'react'
import { connect } from 'react-redux';
import { incrementByValue, decrementByValue } from '../actions';

const returnIntFromInput = (input) => {
    let result = parseInt(input);
    return result ? result : 0;
}

let SimpleCounterControl = ({ dispatch }) => {
    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(returnIntFromInput(1)))}>+1</button>
            <button onClick={() => dispatch(decrementByValue(returnIntFromInput(1)))}>-1</button>
        </div>
    )
}

SimpleCounterControl = connect()(SimpleCounterControl);

export default SimpleCounterControl;