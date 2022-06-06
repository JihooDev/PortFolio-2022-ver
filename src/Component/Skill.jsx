import React, { useEffect, useState } from 'react';
import '../Style/main.scss';
import skillArr from '../ModuleFile/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};
	useEffect(() => {
		AOS.init();
		window.addEventListener('scroll', updateScroll);
	});

	return (
		<div className="Skill">
			<div className="container">
				<div className="skill_header">
					<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						&lt;Skill <span>type = "기술 스택"</span> &gt;
					</h2>
				</div>
				<div className="skill_box" data-aos="fade-up" data-aos-duration="3000">
					<div>
						{skillArr.map(it => {
							return (
								<div key={it.id} className="skill_text">
									<h3>{it.skill}</h3>
								</div>
							);
						})}
					</div>

					<div className="skill_per">
						{skillArr.map(it => {
							return (
								<div key={it.id}>
									<div className="per">
										{window.screen.width > 768 ? (
											<div style={scrollPosition > 1885 ? { width: it.per + '%' } : { width: '0%' }}></div>
										) : (
											<div style={scrollPosition > 1186 ? { width: it.per + '%' } : { width: '0%' }}></div>
										)}
									</div>
									<p>{it.point}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
