class Greet_Command {
    regiter() {
        this.program
            .command('greet <name>')
            .action((name) => this.sayHello(name));
    }
    sayHello(name) {
        console.log(`Hello, ${name}`);
    }
}
module.exports = Greet_Command;
