import readlineSync from 'readline-sync';
import cli from './cli.js';

const number = 3;

const isEven = (num) => {
    return num % 2 === 0;
};

const generateValue = () => {
    return Math.floor(Math.random() * 1000);
};

export default () => {
    const name = cli();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < number; i += 1) {
        const value = generateValue();
        const correctAnswer = isEven(value) ? 'yes' : 'no';
        console.log(`Question: ${value}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};
