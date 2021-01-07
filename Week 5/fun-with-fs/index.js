const fs = require('fs');

// EX1
const dirPath = __dirname + '/files/';

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

// logSizes(dirPath);

// EX2

function mapSizes(dirP) {
    fs.readdirSync(dirP, { withFileTypes: true }).forEach((item) => {
        const object = {};
        if (item.isFile()) {
            object[item.name] = fs.statSync(`${dirP}/${item.name.size}`);
        } else {
            object[item.name] = mapSizes(`${dirP}/${item.name}`);
        }
    });
    // console.log(object);
    fs.writeFileSync(
        __dirname + '/files.json',
        JSON.stringify(object, null, 4)
    );
}
mapSizes(dirPath);
