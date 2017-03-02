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

export const incrementByValue = (param = 1) => {
  return {
    type: 'INCREMENT_BY_VALUE',
    value: param
  }
}

export const decrementByValue = (value = 1) => {
  return {
    type: 'DECREMENT_BY_VALUE',
    value
  }
}
export const multiplyByValue = (value) => {
  return {
    type: 'MULTIPLY_BY_VALUE',
    value
  }
}

export const divideByValue = (value) => {
  return {
    type: 'DIVIDE_BY_VALUE',
    value
  }
}

export const updateStep = (value) => {
  return {
    type: 'UPDATE_STEP',
    step: value
  }
}