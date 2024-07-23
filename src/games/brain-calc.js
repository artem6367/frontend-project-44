const operators = ['+', '-', '*'];

const randomOperator = () => {
  const index = Math.floor(Math.random() * 1000) % 3;
  return operators[index];
};

const randomOperand = () => Math.floor(Math.random() * 11);

const calc = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return '';
  }
};

const generateQuestion = () => {
  const operator = randomOperator();
  const a = randomOperand();
  const b = randomOperand();
  const question = {
    text: `${a} ${operator} ${b}`,
    correctAnswer: calc(operator, a, b),
  };
  return question;
};

export default () => {
  const game = {
    task: 'What is the result of the expression?',
    generateQuestion,
  };
  return game;
};
