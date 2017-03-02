import React, { PropTypes } from 'react';

const CounterControl = ({ counter, incrementStep, onIncrementByValue, onDecrementByValue, onMultiplyByValue, onDivideByValue,onUpdateStep }) => {
    let inputNode;
    return (
        <div>
            <p> {counter} </p>
            <button onClick={() => onIncrementByValue(1)}>+1</button>
            <button onClick={() => onDecrementByValue(1)}>-1</button>
            <p>+/- by value</p>
            <input
                defaultValue={incrementStep}
                onChange={()=>onUpdateStep(parseInt(inputNode.value))}
                ref={
                    (node) => {
                        inputNode = node;
                    }} type="number" />
            <button onClick={
                () => {
                    onIncrementByValue(inputNode.value)
                }}>+{incrementStep}</button>
            <button onClick={
                () => {
                    onDecrementByValue(inputNode.value)
                }}>-{incrementStep}</button>
            <button onClick={
                () => {
                    onMultiplyByValue(inputNode.value)
                }}>*{incrementStep}</button>
            <button onClick={
                () => {
                    onDivideByValue(inputNode.value)
                }}>/{incrementStep}</button>
        </div>)
};

CounterControl.propTypes = {
    counter: PropTypes.number.isRequired,
    incrementStep: PropTypes.number.isRequired,
    onIncrementByValue: PropTypes.func.isRequired,
    onDecrementByValue: PropTypes.func.isRequired,
    onMultiplyByValue: PropTypes.func.isRequired,
    onDivideByValue: PropTypes.func.isRequired,
    onUpdateStep: PropTypes.func.isRequired
}

export default CounterControl;
