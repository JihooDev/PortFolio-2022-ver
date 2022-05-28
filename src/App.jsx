import './App.scss';
import Main from './Component/Main';
import About from './Component/About';
import Header from './Component/Header';
import Skill from './Component/Skill';
import { useState } from 'react';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<About id="About" />
			<Skill />
		</div>
	);
}

export default App;
