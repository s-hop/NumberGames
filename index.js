// Testing Chris Branch....

const getRandomInt = max => {
	max = Math.floor(max);
	return Math.floor(Math.random() * (max + 1));
};

const getRandomElement = array =>
	array[Math.floor(Math.random() * array.length)];

const deleteChildren = parent => {
	for (let i = parent.children.length - 1; i >= 0; i--) {
		parent.children[i].remove();
	}
};

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

const answerClickHandler = e => {
	const selectedAnswer = document.querySelector('#selectedAnswer');
	e.target.removeEventListener('click', answerClickHandler);

	if (parseInt(e.target.value) === correctAnswer) {
		e.target.classList.add('correct');
		score++;
		scoreCounter.innerText = score;
		selectedAnswer.innerText = correctAnswer;
		answers = [];
		setTimeout(newEquation, 800);
	} else {
		e.target.classList.add('incorrect');
		score--;
		scoreCounter.innerText = score;
	}
};

const createAnswerButton = element => {
	const answerButton = document.createElement('button');
	answerButton.innerText = element;
	answerButton.value = element;
	answerButton.addEventListener('click', answerClickHandler);
	answerButtons.appendChild(answerButton);
};

const renderButtons = (array, buttonCreator) => array.map(buttonCreator);

const newEquation = () => {
	deleteChildren(answerButtons);

	const equation = document.querySelector('#equation');
	equation.innerHTML = `<span id="firstBond"></span>+<span id="selectedAnswer">?</span> =10`;

	const firstBond = document.querySelector('#firstBond');
	firstBond.innerText = getRandomInt(10);

	correctAnswer = 10 - parseInt(firstBond.innerText);
	answers.push(correctAnswer);

	while (answers.length < 3) {
		const wrongAnswer = getRandomInt(10);
		if (answers.indexOf(wrongAnswer) === -1) {
			answers.push(wrongAnswer);
		}
	}

	shuffleArray(answers);

	renderButtons(answers, createAnswerButton);
};

///

const root = document.querySelector('#wrapper');
const scoreCounter = document.querySelector('#scoreCounter');
const answerButtons = document.querySelector('#answers');

let score = 0;
let correctAnswer = 0;
let answers = [];

newEquation();
