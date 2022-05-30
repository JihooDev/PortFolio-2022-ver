import React, { useEffect } from 'react';
import '../Style/main.scss';
import project from '../ModuleFile/project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);

export default function Project() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<div className="Project">
			<div className="container">
				<div className="pro_header">
					<h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						&lt;Project <span>type = "진행한 프로젝트"</span> &gt;
					</h2>
					<p data-aos="flip-left" data-aos-delay="1000">
						{project.length} 개의 Project
					</p>
				</div>
				<Swiper spaceBetween={50} slidesPerView={3} navigation className="pro_main" data-aos="fade-up" data-aos-duration="2000">
					<SwiperSlide className="card_con">
						<div className="card front card1"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[0].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[0].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[0].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[0].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="card_con">
						<div className="card front card2"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[1].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[1].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[1].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[1].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="card_con">
						<div className="card front card3"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[2].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[2].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[2].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[2].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="card_con">
						<div className="card front card4"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[3].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[3].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[3].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[3].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="card_con">
						<div className="card front card5"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[4].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[4].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[4].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[4].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="card_con">
						<div className="card front card6"></div>
						<div className="card back">
							<div className="project_name">
								<h1>{project[5].name}</h1>
							</div>
							<div className="project_intro">
								<p>
									<span>제작 기간</span>
									{project[5].period}
								</p>
								<p>
									<span>제작 언어</span>
									{project[5].lang}
								</p>
								<p>
									<span>프로젝트 소개</span>
									<br />
									{project[5].Introduction}
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
