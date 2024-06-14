const http = require('http')
const PORT = 3001
// creating server
const server = http.createServer((req,res) => {
    res.write("Hi Node server")
    res.end()
})

// listening to server in port
server.listen(PORT,(error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Server is running on ' + PORT);
    }
})
