import React, { useState, useEffect } from 'react';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};
	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
		console.log(scrollPosition);
	});

	const aboutGo = () => {
		document.documentElement.scrollTop = 900;
	};

	return (
		<div className={scrollPosition > 0 ? 'Header active ' : 'Header'}>
			<div className="container">
				<div>
					<h1>JIHOO'S PortFolio</h1>
				</div>
				<ul>
					<li onClick={aboutGo} className={scrollPosition >= 900 ? 'active' : null}>
						About me
					</li>
					<li>Skill</li>
					<li>Project</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
}
