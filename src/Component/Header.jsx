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

	return (
		<div className={scrollPosition > 0 ? 'Header active ' : 'Header'}>
			<div className="container">
				<div>
					<h1>JIHOO'S PortFolio</h1>
				</div>
				<ul>
					<li>
						<a href="#About">About me</a>
					</li>
					<li>
						<a href="">Skill</a>
					</li>
					<li>
						<a href="">Project</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
