import React, { useEffect, useState } from 'react';
import '../Style/main.scss';
import skillArr from '../ModuleFile/data';

export default function Skill() {
	return (
		<div className="Skill">
			<div className="container">
				<div className="skill_header">
					<h2>
						&lt;Skill <span>type = "기술 스택"</span> &gt;
					</h2>
					<button>Planning Skill</button>
				</div>
				<div className="skill_box">
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
										<div style={{ width: it.per + '%' }}></div>
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
