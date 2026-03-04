class FavCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('favourite <colour>')
            .action((colour) => this.favouriteCall(colour));
    }
    favouriteCall(colour) {
        const paint = chalk[colour.toLowerCase()] || chalk.white;
        console.log(`Your favorite color is ${colour}!`);
        console.log(paint(`This is your favorite color!`));
    }
}
// program
//     .command('favourite <colour>')
//     .action((colour) => {
//         console.log(`Your favourite colour is ${colour}`);
//     });
module.exports = FavCommand;
