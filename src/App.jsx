import './App.scss';
import Main from './Component/Main';
import About from './Component/About';
import Header from './Component/Header';
import Skill from './Component/Skill';
import Project from './Component/Project';
import 'aos/dist/aos.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<About id="About" />
			<Skill />
			<Project />
		</div>
	);
}

export default App;
