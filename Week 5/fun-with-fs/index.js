const fs = require('fs').promises;
const path = require('path');

// EX1
const dirPath = path.join(__dirname, '/files');

const logSizes = (dirP) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirP, { withFileTypes: true })
            .then((data) => {
                for (const key in data) {
                    if (data[key].isFile()) {
                        fs.stat(dirP).then(
                            (file) =>
                                console.log(
                                    `${dirP}/${data[key].name}: ${file.size}`
                                ),
                            resolve()
                        );
                    } else {
                        logSizes(`${dirP}/${data[key].name}`);
                    }
                }
            })
            .catch((err) => reject(err));
    });
};

// logSizes(dirPath)
//     .then((data) => {
//         console.log(data);
//     })
//     .then(() => console.log('done'));

const log = async () => {
    await logSizes(dirPath);
    console.log('done');
};
log();

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
// mapSizes(dirPath);
