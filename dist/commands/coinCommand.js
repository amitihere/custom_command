class CoinCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('coin call')
            .action(() => this.coinCall());
    }
    coinCall() {
        const coin = Math.random() > 0.5 ? 'Heads' : 'Tails';
        console.log(`The coin landed on ${coin}`);
    }
}
// program
//     .command('coin call')
//     .action(() => {
//         const coin = Math.random() > 0.5 ? 'Heads' : 'Tails';
//         console.log(`The coin landed on ${coin}`);
//     });
module.exports = CoinCommand;
