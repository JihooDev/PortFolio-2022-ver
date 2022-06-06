import React from 'react';
import './modal.scss';
import { motion } from 'framer-motion';
import githubImg from '../../asset/github_logo.svg';

export default function Project_popup({ setModal, project }) {
	console.log(project);
	return (
		<motion.div className="Project_popup" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}>
			<motion.div className="container" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.4 } }}>
				<button
					onClick={() => {
						setModal(false);
					}}
				>
					닫기
				</button>
				<div className="content">
					<h1>{project.name}</h1>
					<div className="intro">
						<h3 id="lang">
							<p>언어</p>
							{project.lang}
						</h3>
						<h3 id="period">
							<p>제작 기간</p>
							{project.period}
						</h3>
						<h3 id="intro_text">
							<p>Review </p>
							{project.Introduction}
						</h3>
						<a href={project.github} target="_blank">
							<img src={githubImg} alt="깃허브로 이동" />
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
