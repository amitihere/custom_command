var axios = require('axios');
class CuteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('cute')
            .action(() => this.cuteCall());
    }
    async cuteCall() {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const imageUrl = response.data.message;
            console.log(`Here's a cute dog image for you: ${imageUrl}`);
            console.log('Follow the link to see the image!');
        }
        catch (err) {
            console.error('Error fetching cute image:', err);
        }
    }
}
// program
//     .command('cuteness')
//     .action(async () => {
//         try{
//             const response = await axios.get('https://dog.ceo/api/breeds/image/random');
//             const imageUrl = response.data.message;
//             console.log(`Here's a cute dog image for you: ${imageUrl}`);
//             console.log('Follow the link to see the image!')
//         }catch(err){
//             console.error('Error fetching cute image:', err);
//         }
//     })
module.exports = CuteCommand;
