import React, { useState } from 'react';
import '../Style/main.scss';
import project from '../ModuleFile/project';

export default function Project() {
	const [onOver, setOnOver] = useState(false);

	const onText = () => {
		setOnOver(true);
	};

	console.log(onOver);

	return (
		<div className="Project">
			<div className="container">
				<div className="pro_header">
					<h2>
						&lt;Project <span>type = "진행한 프로젝트"</span> &gt;
					</h2>
				</div>
				<div className="pro_main">
					{project.map(it => {
						return (
							<div className="card" key={it.id}>
								<div
									className="card_img"
									onMouseOver={onText}
									onMouseLeave={() => {
										setOnOver(false);
									}}
								>
									<img src={it.image} />
									<div className="card_text" style={onOver ? { zIndex: '1' } : null}>
										<h1>{it.name}</h1>
										<p id="intro">{it.Introduction}</p>
										<p>{it.lang}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
