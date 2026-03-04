class SubtractCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('subtract <num1> <num2>')
            .action((num1, num2) => this.subtract(num1, num2));
    }
    subtract(n1, n2) {
        console.log(`The difference of ${n1} and ${n2} is ${parseInt(n1) - parseInt(n2)}.`);
    }
}
// program
//     .command('subtract <num1> <num2>')
//     .action((num1, num2) => {
//         console.log(`The difference of ${num1} and ${num2} is ${parseInt(num1) - parseInt(num2)}.`);
//     });
module.exports = SubtractCommand;
