import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SuperCounterContainer from '../containers/SuperCounter';
import AllCounters from './AllCounters';
const App = () => (
  
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    {/*<SuperCounterContainer/>*/}
    <AllCounters></AllCounters>
  </div>
)

export default App