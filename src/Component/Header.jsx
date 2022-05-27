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
		<div className="Header">
			<h2>ddd</h2>
		</div>
	);
}
