const fs = require('fs');

class DirWatcher {
    constructor(dirWatcherFoo) {
        this.dirWatcherFoo = dirWatcherFoo;
    }

    watch(path, delay) {
        fs.readdir(path, (err, files) => {
            if(err) {
                console.log('err!!! path is wrong')
            }
            files.forEach(file => {
                const filePath = path + '/' + file;

                fs.watchFile(filePath, { persistent: true, interval: delay }, (curr, prev) => {
                    console.log(`the current mtime is: ${curr.mtime}`);
                    console.log(`the previous mtime was: ${prev.mtime}`);
                    if(curr.mtime !== prev.mtime) {
                        this.dirWatcherFoo.emit('changed', filePath);
                    }
                });
            });    
        });
    };
}

export default DirWatcher;
