const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf8'})

const ws = fs.createWriteStream(path.join(__dirname, 'files',"new_bigfile.txt"),{encoding:'utf8'})

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// better way to read and write stream
rs.pipe(ws)
