import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configStore from './configStore'
const configs = configStore()

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(root, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={configs.store}>
    <PersistGate loading={null} persistor={configs.persistor}>
      <div>
        <App />
      </div>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
