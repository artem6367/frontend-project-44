const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const nod = (a, b) => {
  if (b > a) return nod(b, a);
  if (!b) return a;
  return nod(b, a % b);
};

const generateQuestion = () => {
  const a = randomNumber();
  const b = randomNumber();
  const question = {
    text: `${a} ${b}`,
    correctAnswer: nod(a, b),
  };
  return question;
};

export default () => {
  const game = {
    task: 'Find the greatest common divisor of given numbers.',
    generateQuestion,
  };
  return game;
};
