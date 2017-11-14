const fs = require('fs');
const through = require('through2');
const http = require('http');
const parseArgs = require('minimist');

inputOutput = (filePath) => {
    const reader = fs.createReadStream(filePath);
    reader.pipe(process.stdout);
}

// inputOutput('../data/data.txt');

chunkToUppercase = () => {
    const funcToUp = function(chunk, enc, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    };

    process.stdin.pipe(through(funcToUp)).pipe(process.stdout);
}

// chunkToUppercase();