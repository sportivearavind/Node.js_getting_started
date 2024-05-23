console.log("Hello Node.js");
// console.log(global);  // like window object in js browser
const os = require('os')  // importing
console.log(os.type);
console.log(os.version);
console.log(os.homedir);
const path = require('path');

console.log(__dirname);   //directory name
console.log(__filename);  // filename
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));    // give us in object of all details