import mine from '../asset/마인플루언서.jpg';
import diary from '../asset/diary.jpg';
import form from '../asset/form.jpg';
import youtube from '../asset/youtubeApi.jpg';

const project = [
	{
		id: 0,
		name: '마인플루언서 (Team)',
		period: '2022.04 ~ 2022.07',
		lang: 'Jsp, Java, JavaScript, MySQL',
		Introduction: `사용자의 관심사에 맞춘 인플루언서를 추천하여
		쉽고 빠르게 찾을 수 있도록 도와주는 플랫폼.`,
		image: mine,
	},
	{
		id: 1,
		name: 'SimpleDiary',
		period: '2022.06 ~ 2022.07',
		lang: 'React.js',
		Introduction: `React JS 로 만들어 본 감성 일기장 입니다. 오늘 하루의 기분은 어땠는지 그리고 오늘 무슨일이 있었는지를 기록 할 수 있습니다.`,
		image: diary,
	},
	{
		id: 2,
		name: 'Youtube API',
		period: '2022.05',
		lang: 'JavaScript',
		Introduction: `Youtube API 로 50명의 유튜버를 출력`,
		image: youtube,
	},
	{
		id: 3,
		name: '철통보안 회원가입 form',
		period: '2022.05',
		lang: 'HTML, JavaScript',
		Introduction: `정규식 등을 사용한 완벽한 철통보안 회원가입 form`,
		image: form,
	},
];

export default project;
