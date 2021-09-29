import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Root from './pages/root'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Root />
			</BrowserRouter>
		</div>
	)
}

export default App
