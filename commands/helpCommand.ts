// program
//     .command('help')
//     .action(() => {
//         console.log('Available commands:');
//         console.log('greet <name>');
//         console.log('add <num1> <num2>');
//         console.log('subtract <num1> <num2>');
//         console.log('multiply <num1> <num2>');
//         console.log('divide <num1> <num2>');
//         console.log('coin call');
//         console.log('quote');
//         console.log('joke');
//         console.log('cuteness');
//         console.log('help');
//     });

class HelpCommand {
    program;

    constructor(program) {
        this.program = program;
    }
    
    register(){
        this.program
        .command('help')
        .action(() => this.helpCall());
    }
    async helpCall(){
        console.log('Available commands:');
        console.log('greet <name>');
        console.log('add <num1> <num2>');
        console.log('subtract <num1> <num2>');
        console.log('multiply <num1> <num2>');
        console.log('divide <num1> <num2>');
        console.log('coin call');
        console.log('quote');
        console.log('joke');
        console.log('cute');
        console.log('help');
    }
}
// program
//     .command('cuteness')
//     .action(async () => {
//         try{
//             const response = await axios.get('https://dog.ceo/api/breeds/image/random');
//             const imageUrl = response.data.message;
//             console.log(`Here's a cute dog image for you: ${imageUrl}`);
//             console.log('Follow the link to see the image!')
//         }catch(err){
//             console.error('Error fetching cute image:', err);
//         }
//     })
module.exports = HelpCommand;