import React, { PropTypes } from 'react';

const CounterControl = ({counter, onIncrementByValue, onDecrementByValue,onMultiplyByValue}) => {
    let inputNode;
    return (
        <div>
            <p> {counter} </p>
            <button onClick={() => onIncrementByValue()}>+1</button>
            <button onClick={() => onDecrementByValue()}>-1</button>
            <p>+/- by value</p>
            <input ref={
                (node) => {
                    inputNode = node;
                }} type="number" />
            <button onClick={
                () => {
                    onIncrementByValue(parseInt(inputNode.value))
                }}>+</button>
            <button onClick={
                () => {
                    onDecrementByValue(parseInt(inputNode.value))
                }}>-</button>
            <button onClick={
                () => {
                    onMultiplyByValue(parseInt(inputNode.value))
                }}>*</button>
        </div>)
};

CounterControl.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrementByValue: PropTypes.func.isRequired,
    onDecrementByValue: PropTypes.func.isRequired,
    onMultiplyByValue: PropTypes.func.isRequired
}

export default CounterControl;
