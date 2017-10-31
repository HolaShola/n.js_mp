const fs = require('fs');
const through = require('through2');
const http = require('http');
const parseArgs = require('minimist');

const allArgs = process.argv;

const args = parseArgs(process.argv.slice(2), {
        string: ['action', 'file'],
        alias: {'help': 'h', 'file': 'f'},
        stopEarly: true,
        unknown: (arg) => {
            console.error('Unknown: ', arg);
            return false
        }
    }
);

function workWithArguments(args) {
    for(let elem in args) {
        if (elem !== null && elem.length > 1) {
            argsArray.push(elem);
        }
    }
}

// 3. If module is called without arguments, notify user
//    about wrong input and print a usage message
helpMsg = (args) => {
    if (args.length > 0 && args[0] === "help") {
            console.log("help")
    } else if(args.length === 0) {
        console.log("Module is called without arguments!!!");
        process.exit(-1);
    }
};

// 4. Implement a function inside streams.js that will use fs.createReadStream()
//    to pipe the given file to process.stdout 
function inputOutput(filePath) {
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
}

// 5. Implement a function inside streams.js to convert data from process.stdin
//    to uppercase data on process.stdout using the through2 module. 
function transform() {
    function toUpp(chunk, enc, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    };
    process.stdin.pipe(through(toUpp)).pipe(process.stdout);
}

// 6. Implement a function inside streams.js to convert file from csv to json
//    and output data to process.stdout using the through2 module 
function transformCSVtoJSON() {
    let filePath = '../data/data.csv';
    let filePathToWrite = '../data/data2.csv';

    const readStream = fs.createReadStream(filePath);

    let CSVtoJSON = function(chunk){
        let lines=chunk.toString().split("\n");
        let result = [];
        let headers=lines[0].split(",");

        for(let i=1; i<lines.length; i++) {
            let obj = {};
            let currentline=lines[i].split(",");
            for(let j=0;j<headers.length;j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        
        return JSON.stringify(result);
    }

    let toUp = function(chunk, enc, callback) {
        this.push(CSVtoJSON(chunk));
        callback();
    }

    readStream.pipe(through(toUp)).pipe(process.stdout);
}

// 7. Implement a function inside streams.js to convert file from csv to json
//    and output data to a result file with the same name but .json extension,
//    using the through2 module and fs.createWriteStream 
function transformCSVtoJSON_2() {
    let filePath = '../data/data.csv';
    let filePathToWrite = filePath.replace('csv', 'json');

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(filePathToWrite);

    let CSVtoJSON = function(chunk){
        let lines=chunk.toString().split("\n");
        let result = [];
        let headers=lines[0].split(",");

        for(let i=1; i<lines.length; i++) {
            let obj = {};
            let currentline=lines[i].split(",");
            for(let j=0;j<headers.length;j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        
        return JSON.stringify(result);
    }

    let toUp = function(chunk, enc, callback) {
        this.push(CSVtoJSON(chunk));
        callback();
    }

    readStream.pipe(through(toUp)).pipe(writeStream);
}

// 8. Implement cssBundler function and introduce an extra parameter --path. 
const cssBundler = (path) => {
    fs.readdir(path, (err, files) => {
        let reader, writer;
        const fileUrl = 'https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css';
        files.forEach(file => {
            const filePath = path + '/' + file;
            writer = fs.createWriteStream(path + '/bundle.css', {flags: 'a'});
            reader = fs.createReadStream(filePath, {encoding: 'utf8'});
            reader.pipe(writer);
        });
        https.get(fileUrl, (res) => {
            res.on('data', (d) => {
                writer = fs.createWriteStream(path + '/bundle.css', {flags: 'a'});
                writer.write(d);
            });
        });
    });
};