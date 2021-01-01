import { playGame, getRandom, randomPositionFromArray } from '../core.js';

const gameDescription = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 20;
const minProgressionLength = 5;
const maxProgressionLength = 30;

const getProgression = (startingElement, step, len) => {
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    progression.push(startingElement + i * step);
  }
  return progression;
};

const run = () => {
  const getGameData = () => {
    const progressionStart = getRandom(minNumber, maxNumber);
    const progressionStep = getRandom(minNumber, maxNumber);
    const progressionLength = getRandom(minProgressionLength, maxProgressionLength);
    const progression = getProgression(progressionStart, progressionStep, progressionLength);
    const hidePosition = randomPositionFromArray(progression);
    progression[hidePosition] = '..';
    const question = progression.join(' ');
    const correctAnswer = String(progressionStart + hidePosition * progressionStep);
    return { question, correctAnswer };
  };
  playGame(gameDescription, getGameData);
};

export default run;
