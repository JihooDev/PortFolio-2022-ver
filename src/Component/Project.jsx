import React, { useEffect, useRef, useState } from 'react';
import '../Style/main.scss';
import project from '../ModuleFile/project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project_modal from './popup/Project_modal';

export default function Project() {
	useEffect(() => {
		AOS.init();
	});

	const [modal, setModal] = useState(false);

	const cardRef = useRef();

	const [popNum, setPopNum] = useState(0);

	const modalOpen = e => {
		console.log(popNum);
		setPopNum(e.currentTarget.id);
		setModal(true);
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
						{project.map(it => {
							return (
								<div className="card" key={it.id} id={it.id} onClick={modalOpen} ref={cardRef}>
									<h2>{it.name}</h2>
									<img src={it.image} alt="프로젝트 img" />
									<p>
										제작기간 : <span>{it.period}</span>
									</p>
								</div>
							);
						})}
					</div>
					{modal ? <Project_modal setModal={setModal} project={project[popNum]} /> : null}
				</div>
			</div>
		</div>
	);
}
