import React from 'react';
import './popup.scss';
import { motion } from 'framer-motion';
import githubImg from '../../asset/github_logo.svg';

export default function Project_popup({ setPopup, project }) {
	console.log(project);
	return (
		<motion.div className="Project_popup" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}>
			<motion.div className="container" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.4 } }}>
				<button
					onClick={() => {
						setPopup(false);
					}}
				>
					닫기
				</button>
				<div className="content">
					<h1>{project.name}</h1>
					<div className="intro">
						<p id="lang">{project.lang}</p>
						<p id="intro_text">{project.Introduction}</p>
						<a href={project.github} target="_blank">
							<img src={githubImg} alt="" srcset="" />
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
