var axios = require('axios');
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('joke')
            .action(() => this.jokeCall());
    }
    async jokeCall() {
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const jokes = response.data;
            console.log(`${jokes.setup} - ${jokes.punchline}`);
        }
        catch (err) {
            console.error('Error fetching joke:', err);
        }
    }
}
module.exports = JokeCommand;
