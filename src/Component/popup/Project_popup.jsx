import React from 'react';
import './popup.scss';

export default function Project_popup({ setPopup, project }) {
	console.log(project);

	return (
		<div className="Project_popup">
			<h2
				onClick={() => {
					setPopup(false);
				}}
			>
				닫기
			</h2>
		</div>
	);
}
