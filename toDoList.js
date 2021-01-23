const form = document.querySelector('.toDoList');
const input = form.querySelector('input');
const pendingList = document.querySelector('.pending-list');
const finishList = document.querySelector('.finish-list');

let numbers = 0;
let fin = [];
let pen = [];

function deleteList(event) {
	const btn = event.target;
	const li = btn.parentNode;
	const text = li.childNodes[1].innerText;
	const className = li.parentNode.className;
	const obj = {
		className: className,
		text: text
	};

	if (className == 'pending-list') {
		pendingList.removeChild(li);
		const cleanPen = pen.filter(function (item) {
			console.log(typeof item.id, typeof li.id);
			return item.id !== parseInt(li.id);
		});
		pen = cleanPen;
		savePen();
		return obj;
	} else {
		finishList.removeChild(li);
		const cleanFin = fin.filter(function (item) {
			console.log(typeof item.id, typeof li.id);
			return item.id !== parseInt(li.id);
		});
		fin = cleanFin;
		saveFin();
		return obj;
	}
}

function moveList(event) {
	const obj = deleteList(event);
	const text = obj.text;
	const className = obj.className;
	console.log(obj);
	if (className == 'pending-list') {
		paintFinish(text);
	} else {
		paintPending(text);
	}
}

function paintFinish(text) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const movBtn = document.createElement('button');
	const delBtn = document.createElement('button');
	const id = numbers;
	delBtn.addEventListener('click', deleteList);
	movBtn.addEventListener('click', moveList);
	numbers += 1;
	li.id = id;
	span.innerText = text;
	movBtn.innerText = '⏪';
	delBtn.innerText = '❌';
	li.appendChild(delBtn);
	li.appendChild(span);
	li.appendChild(movBtn);
	finishList.appendChild(li);
	const obj = {
		id: id,
		text: text
	};
	fin.push(obj);
	saveFin();
}

function paintPending(text) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const movBtn = document.createElement('button');
	const delBtn = document.createElement('button');
	const id = numbers;
	delBtn.addEventListener('click', deleteList);
	movBtn.addEventListener('click', moveList);
	numbers += 1;
	li.id = id;
	span.innerText = text;
	movBtn.innerText = '✅';
	delBtn.innerText = '❌';
	li.appendChild(delBtn);
	li.appendChild(span);
	li.appendChild(movBtn);
	pendingList.appendChild(li);
	const obj = {
		id: id,
		text: text
	};
	pen.push(obj);
	savePen();
}

function savePen() {
	localStorage.setItem('pen', JSON.stringify(pen));
}
function saveFin() {
	localStorage.setItem('fin', JSON.stringify(fin));
}

function handleSubmit(event) {
	event.preventDefault();
	const value = input.value;
	paintPending(value);
	input.value = '';
}

function loadPend() {
	const loadpend = localStorage.getItem('pen');
	if (loadpend !== null) {
		const parsedPend = JSON.parse(loadpend);
		parsedPend.forEach(function (toDo) {
			paintPending(toDo.text);
		});
	}
}

function loadFin() {
	const loadfin = localStorage.getItem('fin');
	if (loadfin !== null) {
		const parsedFin = JSON.parse(loadfin);
		parsedFin.forEach(function (toDo) {
			paintFinish(toDo.text);
		});
	}
}

function init() {
	loadPend();
	loadFin();
	form.addEventListener('submit', handleSubmit);
}
init();
