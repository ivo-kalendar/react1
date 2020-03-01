import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { appStyle, btnStyle } from './testStyles'

const App = () => {
	return (
		<div style={appStyle} className="App">
		  <h1>Locale Time:</h1>
		  <h1>{new Date().toLocaleTimeString()}</h1>
		  <button style={btnStyle}>Click Me!</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))