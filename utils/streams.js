const parseArgs = require('minimist');

function inputOutput(filePath) {
    console.log('hello from io');
}

function transformFile(filePath) {
    console.log('hello from transformFile');
}

function transform() {
    console.log('hello from transform');
}

function httpClient() {
    console.log('hello from httpClient');
}

function httpServer() {
    console.log('hello from server');
}

function printHelpMessage() {
    console.log('hello from help');
}

// This program should implement helpoption --help.
// If this option passed as a first argument, print usage message and ignore other options.
if (process.argv[2] === '--help') {
    printHelpMessage();
}

// console.log(parseArgs(process.argv.slice(2)));

// console.log(process.argv);

let obj = parseArgs(process.argv.slice(2));

for (let key in obj) {
    console.log('---', key, obj[key]);
    if (key === 'action') {
        inputOutput();
    } else if (key === 'file') {
        printHelpMessage();
    }
}