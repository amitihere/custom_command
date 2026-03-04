class MultiplyCommand {
    program;

    constructor(program) {
        this.program = program;
    }
    
    register(){
        this.program
        .command('multiply <num1> <num2>')
        .action((num1, num2) => this.multiply(num1, num2));
    }
    multiply(n1,n2){
        console.log(`The product of ${n1} and ${n2} is ${parseInt(n1) * parseInt(n2)}.`);
    }
}
// program
module.exports = MultiplyCommand;