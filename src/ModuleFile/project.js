import mine from '../asset/마인플루언서.jpg';
import diary from '../asset/diary.jpg';
import form from '../asset/form.jpg';
import youtube from '../asset/youtubeApi.jpg';

const project = [
	{
		id: 0,
		name: '마인플루언서 (Team)',
		period: '2022.04 ~ 2022.07',
		lang: 'Html  |  CSS  |  JavaScript  |  Jsp  |  Java  |  Spring  |  MySQL',
		Introduction: `마인플루언서는 \n 인플루언서를 소개시켜주고 찜하기 기능과 분야 별 랭킹을 제공하는 페이지 입니다. 학원 동기들과 시작한 저의 첫 팀 프로젝트 이며
		실무에 빠른 적응을 위하여 소통을 중요 시 했습니다 또한 FE 와 BE 간의 어떠한 대화가 오고 가는지도 느꼈습니다. `,
		image: mine,
		github: 'https://github.com/JihooDev/Minefluencer',
	},
	{
		id: 1,
		name: 'SimpleDiary',
		period: '2022.06 ~ 2022.07',
		lang: 'React.js  |  Node-sass',
		Introduction: `React JS 로 만들어 본 감성 일기장 입니다. 오늘 하루의 기분은 어땠는지 그리고 오늘 무슨일이 있었는지를 기록 할 수 있습니다.`,
		image: diary,
		github: 'https://github.com/JihooDev/SimpleDiary-',
	},
	{
		id: 2,
		name: 'Youtube API',
		period: '2022.05 ~ 2022.05',
		lang: 'JavaScript',
		Introduction: `마인플루언서 프로젝트를 진행 할 때 사용해 본 Youtube API 로 화면에 출력해봤습니다.`,
		image: youtube,
		github: 'https://github.com/JihooDev/PortFolio',
	},
	{
		id: 3,
		name: '철통보안 회원가입 form',
		period: '2022.05 ~ 2022.05',
		lang: 'HTML, JavaScript',
		Introduction: `회원가입 폼을 직접 디자인하고 제약 조건을 넣어서 만들어 봤습니다.`,
		image: form,
		github: 'https://github.com/JihooDev/Form',
	},
];

export default project;
