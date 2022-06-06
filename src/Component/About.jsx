import React, { useEffect } from 'react';
import '../Style/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className="About">
			<div className="container">
				<div className="about_box">
					<div className="about_left">
						<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
							&lt;About me <span>type = "자기소개"</span> &gt;
						</h2>
						<div data-aos="fade-up" data-aos-duration="3000">
							<h1 data-aos="fade-up" data-aos-duration="3000">
								Ji hoo <br />
								Kim
							</h1>
						</div>
					</div>
					<div className="about_right">
						<h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
							항상 Why 로 접근하여
							<br />
							나만의 Skill 로 만드는
							<br />
							<p>프론트엔드 개발자 김지후</p>
						</h2>
						<div data-aos="fade-up" data-aos-duration="3000">
							<h2>Education</h2>
							<p>강동대학교 방송영상미디어학과 졸업</p>
							<p>제주 서귀포 고등학교 졸업</p>
						</div>
					</div>
				</div>
				<div className="about_message">
					<div className="message_box" data-aos="fade-up" data-aos-duration="2000">
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
