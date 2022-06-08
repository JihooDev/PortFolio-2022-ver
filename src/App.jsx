import './App.scss';
import Main from './Component/main/Main';
import About from './Component/about/About';
import Header from './Component/header/Header';
import Skill from './Component/skill/Skill';
import Project from './Component/project/Project';
import Contact from './Component/contact/Contact';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<About id="About" />
			<Skill />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
