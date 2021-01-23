const clock = document.querySelector('.clock');
const days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const nameForm = document.querySelector('.name');
const nameInput = nameForm.querySelector('input');
const nameTitle = document.querySelector('.nameTitle');

function timeGet() {
	const date = new Date();
	const year = date.getFullYear(); //통과
	const month = date.getMonth(); //0은 1 12월은 11
	const nowDate = date.getDate();
	const day = date.getDay(); // 6번째 요일 토요일이란뜻
	const hours = date.getHours(); //14시로 나옴
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clock.innerText = `${year} : ${month + 1} : ${nowDate} : ${days[day - 1]} : ${hours < 10 ? `0${hours}` : hours} : ${
		minutes < 10 ? `0${minutes}` : minutes
	} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
function handleSubmitName(event) {
	event.preventDefault();
	const nameValue = nameInput.value;
	paintName(nameValue);
	saveName(nameValue);
}
function saveName(text) {
	localStorage.setItem('name', text);
}
function paintName(text) {
	nameTitle.innerText = `hello ${text}`;
	nameInput.classList.add('hiding');
}
function loadName() {
	const saveValue = localStorage.getItem('name');
	if (saveValue !== null) paintName(saveValue);
}

function init() {
	timeGet();
	setInterval(timeGet, 1000);
	loadName();
	nameForm.addEventListener('submit', handleSubmitName);
}
init();
