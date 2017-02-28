let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const incrementBy1 = () => {
  return {
    type: 'INCREMENT_BY_1',
  }
}
export const decrementBy1 = () => {
  return {
    type: 'DECREMENT_BY_1',
  }
}