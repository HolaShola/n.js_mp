const fs = require('fs');

class Importer {
    constructor(dirWatcherFoo) {
        this.dirWatcherFoo = dirWatcherFoo;
    }

    subscriber() {
        this.dirWatcherFoo.on('changed', (filePath) => {
            console.log(filePath, ' - was change');
        });
    }

    import(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) throw reject(err);
                resolve(this.parseCvsFile(data));
            });
        });
    }

    importSync(path) {
        const data = fs.readFileSync(path, 'utf8');
        return this.parseCvsFile(data);
    }

    parseCvsFile(data) {
        let result = [];
        let dataArray = data.split('\n');
        let keysArray = dataArray[0].split(',');

        for(let i = 1; k = dataArray.length, i < k; i++) {
            let arrayOfDataArray = dataArray[i].split(',');
            let el = {};
            for(let j = 0; l = keysArray.length, j < l; j++) {
                el[keysArray[j] = arrayOfDataArray[j]];
            }
            result.push(el);
        }
        return JSON.stringify(result)
    }

}

export default Importer;
