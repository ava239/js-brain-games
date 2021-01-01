import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const randomPositionFromArray = (arr) => Math.floor(Math.random() * arr.length);
const randomElemFromArray = (arr) => arr[randomPositionFromArray(arr)];

export {
  playGame,
  getRandom,
  randomElemFromArray,
  randomPositionFromArray,
};
