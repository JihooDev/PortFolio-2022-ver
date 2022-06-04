import React, { useState, useEffect } from 'react';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};
	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	});

	const homeGo = () => {
		document.documentElement.scrollTop = 0;
	};

	const aboutGo = () => {
		document.documentElement.scrollTop = 900;
	};

	const skillGo = () => {
		document.documentElement.scrollTop = 1895;
	};

	const projectGo = () => {
		document.documentElement.scrollTop = 2845;
	};

	const contactGo = () => {
		document.documentElement.scrollTop = 3654;
	};

	return (
		<div className={scrollPosition > 0 ? 'Header active ' : 'Header'}>
			<div className="container">
				<div>
					<h1 onClick={homeGo}>JIHOO'S PortFolio</h1>
				</div>
				<ul>
					<li onClick={aboutGo} className={scrollPosition >= 900 && scrollPosition < 1895 ? 'active' : null}>
						About me
					</li>
					<li onClick={skillGo} className={scrollPosition >= 1895 && scrollPosition < 2845 ? 'active' : null}>
						Skill
					</li>
					<li onClick={projectGo} className={scrollPosition >= 2845 && scrollPosition < 3654 ? 'active' : null}>
						Project
					</li>
					<li onClick={contactGo} className={scrollPosition >= 3654 ? 'active' : null}>
						Contact
					</li>
				</ul>
			</div>
		</div>
	);
}
