class AddCommand {
    program;

    register(){
        this.program
        .command('add <num1> <num2>')
        .action((num1, num2) => this.add(num1, num2));
    }
    add(n1,n2){
        console.log(`The sum of ${n1} and ${n2} is ${parseInt(n1) + parseInt(n2)}.`);
    }
}