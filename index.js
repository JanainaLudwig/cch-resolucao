const prompt = require('prompt');
const getOrdered = require('./order')

let numbers = [1, 3, 6, 2, 0];

prompt.start();


prompt.get(['numbers'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    numbers = result.numbers.split(',').map(num => parseInt(num))
    console.log('  Numbers: ' + numbers);
    
    console.log(getOrdered(numbers))
});

