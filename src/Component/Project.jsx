import React, { useEffect, useRef } from 'react';
import '../Style/main.scss';
import project from '../ModuleFile/project';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
	useEffect(() => {
		AOS.init();
	});

	const projectId = useRef();

	const focusProject = () => {
		console.log(projectId.current);
	};

	return (
		<div className="Project">
			<div className="container">
				<div className="pro_header">
					<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						&lt;Project <span>type = "진행한 프로젝트"</span> &gt;
					</h2>
					<p data-aos="flip-left" data-aos-delay="1000" id="project_num">
						{project.length} 개의 Project
					</p>
					<div className="project_main">
						{project.map((it, a) => {
							return (
								<div className="card" key={it.id} ref={projectId}>
									<h2>{it.name}</h2>
									<img src={it.image} alt="프로젝트 img" />
									<p>
										제작기간 : <span>{it.period}</span>
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
