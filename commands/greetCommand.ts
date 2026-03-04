class Greet_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('greet <name>')
            .action((name) => this.sayHello(name));
    }

    sayHello(name: string) {
        console.log(`Hello, ${name}`);
    }
}
module.exports = Greet_Command;