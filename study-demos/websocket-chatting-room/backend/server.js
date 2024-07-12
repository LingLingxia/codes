
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
// you can also add http handle logic ,and use cors for http request
/**
 * app.use(cors());

// 使用自定义配置
app.use(cors({
  origin: 'https://example.com', // 只允许来自 https://example.com 的请求
  methods: ['GET', 'POST'], // 允许的 HTTP 方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允许的请求头
  credentials: true, // 允许带上凭证（如 Cookie）
  exposedHeaders: ['Authorization'], // 允许浏览器访问的响应头
}));
 */
const server = http.createServer(app); 
const io = socketIo(server,{
    cors:{
        origin:"http://localhost:5001",
        methods:["GET","POST"] 
    }
});
const eventF = {
    chatMessage:"submit message",
    joinRoom:"join room",
    leaveRoom:"leave room"
}

const eventB = {
    roomList:"room list",
    roomMessage:"room message",
    roomHistory:"room history",
    roomUserList:"room user list"
}


app.use(cors({
    origin:"http://localhost:5001"
}))

const rooms = {};
for(let i = 0;i<5;i++){
    rooms[`room${i+1}`] = {users:[],messages:[]};
}
io.on("connect",(socket)=>{
    console.log("a user connected");
    //socket.emit 只针对当前连接发送消息,io.emit 针对所有的用户，io.to(room).emit 针对指定的room发消息
    socket.emit(eventB.roomList,Object.entries(rooms).map(([room,data])=>({
        room,
        userCount: data.users.length
    })))

    socket.on(eventF.joinRoom,(room)=>{
        if(rooms[room]){
            socket.join(room);//socket 加入一个room ,room必须是一个唯一的字符串
            rooms[room].users.push(socket.id);
            io.to(room).emit(eventB.roomHistory,rooms[room].messages); 
            io.to(room).emit(eventB.roomMessage,{
                userId:"System",
                content:`${socket.id} has joined the room`,
                timestamp: new Date().toLocaleTimeString()
            })
            console.log("join room",room)
           // io.to(room).emit(eventB.roomUserList,rooms[room].users.map(id=>{id}));
            updateRoomList();
        }
    })

    socket.on(eventF.leaveRoom,(room)=>{
        if(rooms[room]){
            leaveRoom(room);
        }
    })

    socket.on(eventF.chatMessage,(data)=>{ 
        console.log("message come",data)
        //io.emit(eventB.roomMessage,msg); 如果只有一个房间，就直接io.emit
        //如果有多个就是io.to(room).emit
        const {room,message} = data;
        if(rooms[room]){
            const newMessage = {
                userId:socket.id,
                content:message,
                timestamp:new Date().toLocaleTimeString(),
            };
            rooms[room].messages.push(newMessage);
            io.to(room).emit(eventB.roomMessage,newMessage);
   
        }
    })
    socket.on("disconnect",()=>{ //和主动退出一样的logic，区别是需要自己去查room
        for(const room in rooms){
            if(rooms[room].users.includes(socket.id)){
                leaveRoom(room)
            }
        }
        console.log("user disconnected");
    });
    function leaveRoom(room){
        socket.leave(room);
        rooms[room].users = rooms[room].users.filter(id=>id!==socket.id);
        io.to(room).emit(eventB.roomMessage,{
            userId:"System",
            content:`${socket.id} has left the room`,
            timestamp: new Date().toLocaleTimeString()
        })
         io.to(room).emit(eventB.roomUserList,rooms[room].users.map(id=>{id}));
        updateRoomList();
    }
    function updateRoomList(){
        io.emit(eventB.roomList,Object.entries(rooms).map(([room,data])=>({ //这是给所有的用户发送吗
            room,
            userCount:data.users.length
        })))
        console.log("trigger update room list")
    }
})



const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("server run on " + PORT);
})