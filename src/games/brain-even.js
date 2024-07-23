const isEven = (num) => num % 2 === 0;

const generateValue = () => Math.floor(Math.random() * 1000);

const generateQuestion = () => {
  const value = generateValue();
  const question = {
    text: value,
    correctAnswer: isEven(value) ? 'yes' : 'no',
  };
  return question;
};

export default () => {
  const game = {
    task: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestion,
  };
  return game;
};
