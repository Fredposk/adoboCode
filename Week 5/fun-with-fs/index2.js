const fs = require('fs').promises;
const path = require('path');

// EX1
const dirPath = path.join(__dirname, '/files');

const logSizes = (dirP) => {
    fs.readdir(dirP, { withFileTypes: true }, (err, data) => {
        if (err) {
            throw err;
        }
        for (const key in data) {
            if (data[key].isFile()) {
                fs.stat(dirP, (err, file) => {
                    if (err) {
                        throw err;
                    }
                    console.log(`${dirP}/${data[key].name}: ${file.size}`);
                });
            } else {
                logSizes(`${dirP}/${data[key].name}`);
            }
        }
    });
};
