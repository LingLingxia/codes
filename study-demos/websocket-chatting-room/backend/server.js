
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app); 
const io = socketIo(server,{
    cors:{
        origin:"http://localhost:5001",
        methods:["GET","POST"]
    }
});

const eventB = "chat message - from backend"
const eventF = "chat message - from frontend"

app.use(cors({
    origin:"http://localhost:5001"
}))
io.on("connect",(socket)=>{
    console.log("a user connected");
    socket.on(eventF,(msg)=>{ 
        console.log("message come",msg)
        io.emit(eventB,msg);
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected");
    })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("server run on " + PORT);
})