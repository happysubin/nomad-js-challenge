const body = document.querySelector('body');

const src = [
	'https://images.unsplash.com/photo-1611086810555-1eb945f1aecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
	'https://images.unsplash.com/photo-1610052898016-78970c138452?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
	'https://images.unsplash.com/photo-1610730297006-ed0e847c34f9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1549110891-8f9f8a9f9515?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80'
];

function paintBackGround(number) {
	const image = new Image();
	image.src = src[`${number}`];
	image.classList.add('bgImage');
	body.prepend(image);
}

function randomGet() {
	const number = Math.floor(Math.random() * 4);
	return number;
}

function init() {
	const number = randomGet();
	paintBackGround(number);
}
init();

//images/${number + 1}.jpg
