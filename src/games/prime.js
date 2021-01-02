import { playGame, getRandom } from '../core.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 499;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let j = 2, maxPossibleDivisor = number / 2; j <= maxPossibleDivisor; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const run = () => {
  const getGameData = () => {
    const number = getRandom(minNumber, maxNumber);
    const question = number * 2 + 1;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  playGame(gameDescription, getGameData);
};

export default run;
