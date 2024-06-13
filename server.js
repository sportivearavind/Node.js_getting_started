
const path = require("path");
const fsPromises = require("fs").promises; // importing filesystem promises

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
        console.log(data);
    }catch(err){
        console.error(err);
    }
} 

fileOps();



// writing a file
// fs.writeFile(
//   path.join(__dirname, "files", "end.txt"),
//   "End the program",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//   }
// );

// update a file
// fs.appendFile(
//   path.join(__dirname, "files", "end.txt"),
//   "End the program, See u next time",
//   (err) => {
//     if (err) throw err;
//     console.log("append complete");
//   }
// );

// The best practice is appending inside the write file
// Buy this also called callback hell
// writing a file
// fs.writeFile(
//   path.join(__dirname, "files", "end.txt"),
//   "End the program",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//     // adding the appendFile as callback to the writeFile
//     fs.appendFile(
//       path.join(__dirname, "files", "end.txt"),
//       "End the program, See u next time",
//       (err) => {
//         if (err) throw err;
//         console.log("append complete");
//       }
//     );
//   }
// );

// Note: we can also create file using appendFile

// exit on uncaught exception
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
