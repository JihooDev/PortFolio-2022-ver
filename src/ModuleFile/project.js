import mine from '../asset/mine.svg';
import diary from '../asset/diary.jpg';
import running from '../asset/running.jpg';
import 신호등 from '../asset/신호등.jpg';

const project = [
	{
		id: 0,
		name: '마인플루언서 (팀 프로젝트)',
		period: '2022.04 ~ 2022.07',
		lang: 'Jsp, Java, JavaScript, MySQL',
		Introduction: `사용자의 관심사에 맞춘 인플루언서를 추천하여
		쉽고 빠르게 찾을 수 있도록 도와주는 플랫폼.`,
		image: mine,
	},
	{
		id: 1,
		name: 'SimpleDiary (감성 일기장)',
		period: '2022.06 ~ 2022.07',
		lang: 'React.js',
		Introduction: `React 강의에서 만들어보는 감성 일기장`,
		image: diary,
	},
	{
		id: 2,
		name: '새벽을 여는 사람들',
		period: '2022.05 ~ ing',
		lang: 'React.js',
		Introduction: `하루를 아껴쓰는 방법! 미라클모닝에 대해 자세히 설명하고
		사람의 적정 수면시간 그리고 미라클 모닝을 마무리 하는 미라클 다이어리!`,
		image: running,
	},
	{
		id: 3,
		name: '신호등',
		period: '2022.03 ~ 2022.07',
		lang: 'React.js',
		Introduction: `나의 인생을 신호등으로 표현! 빨강색은 위기 노랑색은 기회 초록색은 성공으로
		인생을 표현!`,
		image: 신호등,
	},
	{
		id: 4,
		name: 'Youtube API',
		period: '2022.05',
		lang: 'JavaScript',
		Introduction: `Youtube API 로 50명의 유튜버를 출력`,
		image: 신호등,
	},
	{
		id: 5,
		name: '철통보안 회원가입 form',
		period: '2022.05',
		lang: 'HTML, JavaScript',
		Introduction: `정규식 등을 사용한 완벽한 철통보안 회원가입 form`,
		image: 신호등,
	},
];

export default project;
