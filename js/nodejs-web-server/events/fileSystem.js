const fs = require('fs');
const writableSystem = fs.createWriteStream('file.txt');

writableSystem.write('Ini baris pertama ! \n');
writableSystem.write('Ini baris kedua ! \n');
writableSystem.end();