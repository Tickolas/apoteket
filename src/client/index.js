import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import store from './reducers/Reducer'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
