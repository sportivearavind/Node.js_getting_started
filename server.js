console.log("Hello node");
// console.log(global);
const os = require("os"); // importing os
console.log(os.type);
console.log(os.version);
console.log(os.homedir);

console.log(__dirname); // give the directory name
console.log(__filename); // give the filename

const path = require("path");
console.log(path.dirname(__filename)); // find the directory name using file
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); // frequently used

const math = require("./math"); // or import math from 'math'
console.log(math.add(2, 5));
