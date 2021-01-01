import { playGame, getRandom } from '../core.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 300;

const findGcd = (a, b) => {
  let op1 = a;
  let op2 = b;
  while (op2) {
    [op1, op2] = [op2, op1 % op2];
  }
  return op1;
};

const run = () => {
  const getGameData = () => {
    const operand1 = getRandom(minNumber, maxNumber);
    const operand2 = getRandom(minNumber, maxNumber);
    const question = `${operand1} ${operand2}`;
    const correctAnswer = String(findGcd(operand1, operand2));
    return { question, correctAnswer };
  };
  playGame(gameDescription, getGameData);
};

export default run;
