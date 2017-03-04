import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require("../styles/styles.css");

const Todo = ({ onClick, completed, text }) => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionLeaveTimeout={500}
    transitionEnterTimeout={500} >
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  </ReactCSSTransitionGroup>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo