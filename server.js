const http = require('http')
const PORT = 3002
const fs = require('fs')
// creating server
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404)
            res.write('Page not found')
        }else{
            res.write(data)
        }

        res.end()
    })
})

// listening to server in port
server.listen(PORT,(error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Server is running on ' + PORT);
    }
})
