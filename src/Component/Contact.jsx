import React from 'react';
import '../Style/main.scss';
import email from '../asset/email.png';
import phone from '../asset/phone.png';
import github from '../asset/github_logo.svg';
import tistory from '../asset/tistory.png';
import insta from '../asset/insta_logo.png';

export default function Contact() {
	return (
		<div className="Contact">
			<div className="container">
				<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
					&lt;Contact <span>type = "Pick Me"</span> &gt;
				</h2>
				<div className="contact_message" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
					<div className="company_mes">
						<h2 data-aos="zoom-in">Company</h2>
						<div data-aos="zoom-out-left" data-aos-delay="500">
							<p>지후씨를 선택하면 저희에게 어떠한 이득이 있죠?</p>
						</div>
					</div>
					<div className="jihoo_mes">
						<h2 data-aos="zoom-in" data-aos-delay="1000">
							Ji hoo Kim
						</h2>
						<p data-aos="zoom-out-right" data-aos-delay="1500">
							개발자는 손과 머리만 있으면 할 수 있는 직업이 아니라고 생각합니다.
							<br />
							제일 중요한 것은 소통에 필요한 입과 귀 라고 생각합니다.
							<br />
							자신의 의견을 타인에게 전달 할 때는 타인의 의견도 들을 준비가 되어 있어야하며
							<br />
							자신의 의견이 맞다고만 주장한다면 그것은 의견이 아니라 고집 이라고 생각합니다.
							<br />
							<br />
							제가 있던 곳은 분위기와 마무리 까지 전부 좋았습니다.
							<br />
							분위기와 마무리 그리고 실적 까지 원하시면 저를 PICK 하세요!
						</p>
					</div>
				</div>
				<div className="con_text">
					<div className="con_main_text">
						<h1 data-aos="fade-down" data-aos-easing="linear">
							“저의 포텐을 터트려줄 기업을 찾습니다”
						</h1>
						<p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
							저의 만족감은 곧 사용자에서 부터 나옵니다.
							<br />
							사용자를 우선적으로 생각하는 결과물을 만들겠습니다.
							<br />
							최신의 트렌드를 따라만 간다면
							<br />
							그것은 개발자가 아닌 “기술자” 입니다.
							<br />
							<span>최신의 트렌드를 개척하는 개발자가 되겠습니다.</span>
						</p>
					</div>
					<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						&lt;button <span>type = "연락주세요!"</span> &gt;
					</h2>
					<div className="phone_email">
						<p>
							<span>
								<img src={email} alt="" srcSet="" />
							</span>
							| wlgn829@gmail.com
						</p>
						<p>
							<span>
								<img src={phone} alt="" srcSet="" />
							</span>
							| +82 10 5217 6194
						</p>
					</div>
					<div className="link">
						<ul>
							<li>
								<a href="https://github.com/JihooDev" target={'_blank'}>
									<img src={github} alt="깃허브" />
								</a>
							</li>
							<li>
								<a href="https://hoopiler.tistory.com/" target={'_blank'}>
									<img src={tistory} alt="티스토리" />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/08.29__/" target={'_blank'}>
									<img src={insta} alt="인스타그램" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
