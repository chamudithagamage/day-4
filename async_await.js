const fs = require('fs').promises;
//Async funnction to read a file

async function readFileAsync(path){
    try{
        console.log('Start reading the file...');

        const data = await fs.readFile(path,'utf8');
        console.log(data);

        console.log('File read successfully..');
    }catch(err) {
        console.error('An error occurred:',err);

    }
}
//call the async function

readFileAsync('input.txt');