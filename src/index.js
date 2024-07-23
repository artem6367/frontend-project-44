import readlineSync from 'readline-sync';
import cli from './cli.js';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';

const number = 3;

const getGame = (name) => {
  switch (name) {
    case 'even':
      return brainEven();
    case 'calc':
      return brainCalc();
    default:
      return null;
  }
};

export default (gameName = 'even') => {
  const game = getGame(gameName);
  const name = cli();
  console.log(game.task);
  for (let i = 0; i < number; i += 1) {
    const question = game.generateQuestion();
    console.log(`Question: ${question.text}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(question.correctAnswer);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
