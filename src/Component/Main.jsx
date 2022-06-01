import React from 'react';
import '../Style/main.scss';
import { motion } from 'framer-motion';

export default function Main() {
	return (
		<motion.div className="Main" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1.1, transition: { duration: 2, delayChildren: 3 } }}>
			<div className="container">
				<main>
					<motion.h2 animate={{ scale: 0.8, transition: { duration: 1 } }}>
						안녕하세요 <motion.span animate={{ background: '#de3c4b', transition: { duration: 4 } }}>성실함 & 책임감</motion.span>
						이 기본 탑재 되어있는
						<br />
						클라이언트 개발자 김지후 입니다
					</motion.h2>
				</main>
			</div>
			<footer>
				<p>JIHOO’S PortFolio 2022 ver</p>
			</footer>
		</motion.div>
	);
}
