const fs = require('fs');

// if there is no new directory already, the create the new directory
if(!fs.existsSync('./new')){
    fs.mkdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory Created");
    });
}


// exit on uncaught exception
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});