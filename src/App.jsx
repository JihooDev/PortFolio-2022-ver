import './App.scss';
import Main from './Component/Main';
import About from './Component/About';
import Header from './Component/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<About id="About" />
		</div>
	);
}

export default App;
