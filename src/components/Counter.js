import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require("style-loader!css-loader!../styles/styles.css");

class Counter extends React.Component {
  render() {
    let { counter } = this.props
    return (

      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
                         transitionAppear={true}
                         transitionAppearTimeout={500}
                         transitionLeaveTimeout={500}
                         transitionEnterTimeout={500}      >
          <p key={"abc"} >
            {counter}
          </p>
        </ReactCSSTransitionGroup>
        {counter}
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Counter;