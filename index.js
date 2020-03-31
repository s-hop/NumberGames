const getRandomInt = max => {
	max = Math.floor(max);
	return Math.floor(Math.random() * (max + 1));
};

const getRandomElement = array => {
	return array[Math.floor(Math.random() * array.length)];
};

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

const createAnswerButton = element => {
	const answerButton = document.createElement('button');
	answerButton.innerText = element;
	root.appendChild(answerButton);
};

///

const root = document.querySelector('#wrapper');
const answers = [];

const firstBond = document.querySelector('#randomNumber');
firstBond.innerText = getRandomInt(10);

const correctAnswer = 10 - parseInt(firstBond.innerText);
answers.push(correctAnswer);

while (answers.length < 3) {
	const wrongAnswer = getRandomInt(10);
	if (answers.indexOf(wrongAnswer) === -1) {
		answers.push(wrongAnswer);
	}
}

shuffleArray(answers);

const renderButtons = answers.map(createAnswerButton);
