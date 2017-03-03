import React, { PropTypes } from 'react'

const Counter = ({ counter }) => (
  <p>{counter}</p>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Counter;