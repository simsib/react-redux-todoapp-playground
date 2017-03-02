import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter';
import incrementStep from './counterStep';
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  wololoCounter:counter, // map reducer to some store name 
  incrementStep
})

export default todoApp