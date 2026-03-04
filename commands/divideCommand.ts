class DivideCommand {
    program;

    constructor(program) {
        this.program = program;
    }
    
    register(){
        this.program
        .command('divide <num1> <num2>')
        .action((num1, num2) => this.divide(num1, num2));
    }
    divide(n1,n2){
        if(parseInt(n2) === 0){
            console.log('Error: Division by zero is not allowed.');
        } else {
            console.log(`The quotient of ${n1} and ${n2} is ${parseInt(n1) / parseInt(n2)}.`);
        }
    }
}
// program
//     .command('subtract <num1> <num2>')
//     .action((num1, num2) => {
//         console.log(`The difference of ${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}.`);
//     });
module.exports = DivideCommand;