const randomStart = () => Math.floor(Math.random() * 100);

const randomStep = () => Math.floor(Math.random() * 10) + 1;

const randomLength = () => Math.floor(Math.random() * 1000) % 6 + 5;

const randomIndex = (max) => Math.floor(Math.random() * 1000) % max;

const generateQuestion = () => {
  const start = randomStart();
  const step = randomStep();
  const length = randomLength();
  const index = randomIndex(length);
  const progression = [];
  let correctAnswer;
  for (let value = start, i = 0; i < length; i += 1, value += step) {
    if (i === index) {
      progression.push('..');
      correctAnswer = value;
    } else {
      progression.push(value);
    }
  }
  const question = {
    text: progression.join(' '),
    correctAnswer: correctAnswer,
  };
  return question;
};

export default () => {
  const game = {
    task: 'What number is missing in the progression?',
    generateQuestion,
  };
  return game;
};