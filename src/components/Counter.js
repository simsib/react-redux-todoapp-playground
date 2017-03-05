import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import AnimateOnChange from 'react-animate-on-change';
require("../styles/styles.css");

class Counter extends React.Component {
  componentWillUpdate() {
    // console.log(this.njum);
    // var node = ReactDOM.findDOMNode(this.njum);
    // node.classList.add('background');
    // setTimeout(() => {
    //   var node = ReactDOM.findDOMNode(this.njum);
    //   node.classList.remove('background');
    // },1000)
  }
  render() {
    let { counter } = this.props;
    return (
      /*<div>
        <p className={'background'} ref={(tmp) => this.njum = tmp}>{counter}</p>
      </div>*/
      <p>
        <AnimateOnChange
          baseClassName='Score'
          animationClassName='Score--bounce'
          animate={true}>
          {counter}
        </AnimateOnChange>
        <br/>
      </p>
    
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Counter;