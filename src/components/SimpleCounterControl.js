import React, { PropTypes } from 'react';

const SimpleCounterControl = ({ counter,  onIncrementByValue, onDecrementByValue }) => {
    let inputNode;
    return (
        <div>
            <p> {counter} </p>
            <button onClick={() => onIncrementByValue(1)}>+1</button>
            <button onClick={() => onDecrementByValue(1)}>-1</button>
        </div>)
};

SimpleCounterControl.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrementByValue: PropTypes.func.isRequired,
    onDecrementByValue: PropTypes.func.isRequired,
}

export default SimpleCounterControl;
