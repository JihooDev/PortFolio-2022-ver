import React from 'react';
import '../Style/main.scss';
import myMain from '../asset/myMain.jpg';

export default function About() {
	return (
		<div className="About">
			<div className="container">
				<div className="about_box">
					<div className="about_left">
						<h2>
							&lt;About me <span>type = "자기소개"</span> &gt;
							<div>
								<h1>
									Ji hoo <br />
									Kim
								</h1>
							</div>
						</h2>
					</div>
					<div className="about_right">
						<h2>
							항상 Why 로 접근하여
							<br />
							나만의 Skill 로 만드는
							<br />
							<span>프론트엔드 개발자 김지후</span>
						</h2>
						<div>
							<h2>Education</h2>
							<p>강동대학교 방송영상미디어학과 졸업</p>
							<p>제주 서귀포 고등학교 졸업</p>
						</div>
					</div>
				</div>
				<div className="about_message">
					<div className="message_box">
						<p>
							안녕하세요! 프론트엔드 개발자 김지후 입니다.
							<br />
							소중한 시간을 저의 포트폴리오에 투자해주셔서 너무 감사합니다.
							<br />
							저는 이 직업에 대해 굉장히 자부심을 느끼고 흥미를 가지고 있습니다.
							<br /> 저의 최종 목적지는 취업이 아닌 고급 개발자 입니다.
							<br />
							목적지 까지 방향과 속도는 다를 수 있지만
							<br />
							한번 정해 둔 목적지는 절대 변하지 않습니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
