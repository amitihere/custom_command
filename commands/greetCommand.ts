class Greet_Command {
    name;
    program;


    regiter(){
        this.program
        .command('greet <name>')
        .action((name)=>this.sayHello(name));
    }

    sayHello(name:string){
        console.log(`Hello, ${name}`);
    }
}
module.exports = Greet_Command;