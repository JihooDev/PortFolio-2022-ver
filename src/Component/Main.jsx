import React, { useEffect, useState } from 'react';
import '../Style/main.scss';

export default function Main() {
	return (
		<div className="Main">
			<header>
				<div className="header">
					<div className="main_logo">
						<h1>JIHOO'S PortFolio</h1>
					</div>
					<div className="main_menu">
						<ul>
							<li>
								<a href="#">About me</a>
							</li>
							<li>
								<a href="#">Skill</a>
							</li>
							<li>
								<a href="#">Project</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<div className="container">
				<main>
					<h2>
						안녕하세요 <span>성실함 & 책임감</span>이 기본 탑재 되어있는
						<br />
						클라이언트 개발자 김지후 입니다
					</h2>
				</main>
				<footer>
					<p>JIHOO’S PortFolio 2022 ver</p>
				</footer>
			</div>
		</div>
	);
}
