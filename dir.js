const fs = require('fs');

// if the file exist, then it will remove the directory or file
if(fs.existsSync('./new')){
    fs.rmdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory Created");
    });
}


// exit on uncaught exception
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});