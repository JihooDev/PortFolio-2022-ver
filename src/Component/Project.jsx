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
				</div>
				<Swiper spaceBetween={50} slidesPerView={3} navigation className="pro_main">
					<SwiperSlide className="card card1">
						<h1>{project[0].name}</h1>
					</SwiperSlide>
					<SwiperSlide className="card card2">
						<h1>{project[1].name}</h1>
					</SwiperSlide>
					<SwiperSlide className="card card3">
						<h1>{project[2].name}</h1>
					</SwiperSlide>
					<SwiperSlide className="card card4">
						<h1>{project[3].name}</h1>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
