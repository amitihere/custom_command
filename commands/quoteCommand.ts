var axios = require('axios');

class QuoteCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('quote')
            .action(() => this.quoteCall());
    }
    async quoteCall() {
        try {
            const response = await axios.get('https://dummyjson.com/quotes');
            const quotes = response.data;
            console.log(`"${quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].quote}" - ${quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].author}`);
        } catch (err) {
            console.error('Error fetching quote:', err);
        }
    }
}

module.exports = QuoteCommand;
// program
//     .command('quote')
//     .action(async () => {
//         try {
//             const response = await axios.get('https://dummyjson.com/quotes');
//             const quote = response.data;
//             console.log(`"${quote.quotes[Math.floor(Math.random() * quote.quotes.length)].quote}" - ${quote.quotes[Math.floor(Math.random() * quote.quotes.length)].author}`);
//         }   catch (error) {
//             console.error('Error fetching quote:', error);
//         }
//     });