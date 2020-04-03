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
	if (parseInt(e.target.value) === correctAnswer) {
		score++;
		scoreCounter.innerText = score;
		equation.innerHTML = '<p>CORRECT!</p>';
		deleteChildren(answerButtons);
		answers = [];
		setTimeout(newEquation, 1000);
	} else {
		e.target.classList.add('incorrect');
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
	const equation = document.querySelector('#equation');
	equation.innerHTML = `<span id="firstBond">0</span>+<span id="selectedNumber">?</span> =10`;

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
