import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterContainer from '../containers/Counter';
import AllCounters from './AllCounters';
const App = () => (
  
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    {/*<CounterContainer/>*/}
    <AllCounters></AllCounters>
  </div>
)

export default App