const net = require('net');

const server = net.createServer(connection =>{
    console.log("Client Connected ......");
    
})

server.listen(8000, ()=>{console.log(`custom redis server running on port ${8000}`)});