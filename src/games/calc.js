import { playGame, getRandom } from '../core.js';

const gameDescription = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 20;
const operations = ['+', '-', '*'];

const calculateAnswer = (op1, op2, operation) => {
  if (operation === '+') {
    return op1 + op2;
  }
  if (operation === '-') {
    return op1 - op2;
  }
  if (operation === '*') {
    return op1 * op2;
  }
  return false;
};
const randomElemFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const run = () => {
  const getGameData = () => {
    const operand1 = getRandom(minNumber, maxNumber);
    const operand2 = getRandom(minNumber, maxNumber);
    const operation = randomElemFromArray(operations);
    const question = `${operand1} ${operation} ${operand2}`;
    const correctAnswer = String(calculateAnswer(operand1, operand2, operation));
    return { question, correctAnswer };
  };
  playGame(gameDescription, getGameData);
};

export default run;
