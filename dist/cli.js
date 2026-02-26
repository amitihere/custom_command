#!/usr/bin/env node
const { Command } = require('commander');
const axios = require('axios');
const program = new Command();
program
    .command('greet <name>')
    .action((name) => {
    console.log(`Hello, ${name}!`);
});
program
    .command('add <num1> <num2>')
    .action((num1, num2) => {
    console.log(`The sum of ${num1} and ${num2} is ${parseInt(num1) + parseInt(num2)}.`);
});
program
    .command('subtract <num1> <num2>')
    .action((num1, num2) => {
    console.log(`The difference of ${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}.`);
});
program
    .command('multiply <num1> <num2>')
    .action((num1, num2) => {
    console.log(`The product of ${num1} and ${num2} is ${parseInt(num1) * parseInt(num2)}.`);
});
program
    .command('divide <num1> <num2>')
    .action((num1, num2) => {
    if (parseInt(num2) === 0) {
        console.log('Error: Division by zero is not allowed.');
    }
    else {
        console.log(`The quotient of ${num1} and ${num2} is ${parseInt(num1) / parseInt(num2)}.`);
    }
});
program
    .command('coin call')
    .action(() => {
    const coin = Math.random() > 0.5 ? 'Heads' : 'Tails';
    console.log(`The coin landed on ${coin}`);
});
program
    .command('quote')
    .action(async () => {
    try {
        const response = await axios.get('https://dummyjson.com/quotes');
        const quote = response.data;
        console.log(`"${quote.quotes[Math.floor(Math.random() * quote.quotes.length)].quote}" - ${quote.quotes[Math.floor(Math.random() * quote.quotes.length)].author}`);
    }
    catch (error) {
        console.error('Error fetching quote:', error);
    }
});
program
    .command('joke')
    .action(async () => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const jokes = response.data;
        console.log(`${jokes.setup} - ${jokes.punchline}`);
    }
    catch (error) {
        console.error('Error fetching joke:', error);
    }
});
program
    .command('cuteness')
    .action(async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imageUrl = response.data.message;
        console.log(`Here's a cute dog image for you: ${imageUrl}`);
        console.log('Follow the link to see the image!');
    }
    catch (err) {
        console.error('Error fetching cute image:', err);
    }
});
program
    .command('help')
    .action(() => {
    console.log('Available commands:');
    console.log('greet <name>');
    console.log('add <num1> <num2>');
    console.log('subtract <num1> <num2>');
    console.log('multiply <num1> <num2>');
    console.log('divide <num1> <num2>');
    console.log('coin call');
    console.log('quote');
    console.log('joke');
    console.log('cuteness');
    console.log('help');
});
program.parse();
