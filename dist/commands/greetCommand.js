class Greet_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('greet <name>')
            .action((name) => this.sayHello(name));
    }
    sayHello(name) {
        console.log(`Hello, ${name}`);
    }
}
module.exports = Greet_Command;
