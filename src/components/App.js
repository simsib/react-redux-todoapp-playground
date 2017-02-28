import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterContainer from '../containers/Counter';
const App = () => (
  
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <CounterContainer/>
  </div>
)

export default App