const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const generateQuestion = () => {
  const number = randomNumber();
  const question = {
    text: number,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  };
  return question;
};

export default () => {
  const game = {
    task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestion,
  };
  return game;
};
