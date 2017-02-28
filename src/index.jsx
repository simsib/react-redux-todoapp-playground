import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import todoApp from './reducers'
import App from './components/App'
const enchancers = compose (
  window.devToolsExtension ? window.devToolsExtension(): f=>f
);
let store = createStore(todoApp,enchancers)
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)