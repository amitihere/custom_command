class JokeCommand {
    program;

    constructor(program) {
        this.program = program;
    }
    
    register(){
        this.program
        .command('joke')
        .action(() => this.jokeCall());
    }
    async jokeCall(){
        try{
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const jokes = response.data;
            console.log(`${jokes.setup} - ${jokes.punchline}`);
        }catch(err){
            console.error('Error fetching joke:', err);
        }
    }
}
// program
//     .command('joke')
//     .action(async () => {
//         try {
//             const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
//             const jokes = response.data;
//             console.log(`${jokes.setup} - ${jokes.punchline}`);
//         } catch (error) {
//             console.error('Error fetching joke:', error);
//         }
//     });
module.exports = JokeCommand;