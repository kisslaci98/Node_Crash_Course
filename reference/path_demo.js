const path = require('path');
const fs = require('fs');

/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created!');
});*/

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Edd ki a vetést te veréblelkű!', err => {
    if (err) throw err;
    console.log('File has been created and was filled with info.');

    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Mivan kalácsképűűűű?!', err => {
        if (err) throw err;
        console.log('File has been modified.');
    });
});

/*console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));


console.log(path.join(__dirname, 'test', 'hello.html'));*/