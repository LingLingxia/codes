import React ,{useEffect ,useState} from "react";
import {io} from "socket.io-client";

const socket = io("http://localhost:3000");//后端
const eventF = {
  chatMessage:"submit message",
  joinRoom:"join room",
  leaveRoom:"leave room"
}

const eventB = {
  roomList:"room list",
  roomMessage:"room message",
  roomHistory:"room history",
  //roomUserList:"room user list"
}
function App(){
   const [rooms,setRooms] = useState([]);
   const [currentRoom,setCurrentRoom] = useState("");
   const [list,setList] = useState([]);
   const [message,setMessage] = useState("");
   const [userId,setUserId] = useState("");
   console.log("render")
   useEffect(()=>{
    console.log("use effect")
    // const storedId = sessionStorage.getItem("userId");
    // if(storedId){
    //   setUserId(storedId);
    // }else{
    //   const newId = prompt("Enter your unique ID:");
    //   sessionStorage.setItem("userId",newId);
    //   setUserId(newId);
    // }
    socket.on(eventB.roomList,(roomList)=>{
      console.log("room list",roomList)
      setRooms(roomList);
    })
    socket.on(eventB.roomHistory,(history)=>{
      setList(history);
    })

    socket.on(eventB.roomMessage,(msg)=>{
      console.log("message come",msg);
      console.log(list.length);
      setList(prevMessages=>[...prevMessages,msg])
    })

    return () => {
      Object.keys(eventB).forEach((event)=>{
        socket.off(event);
      })
    };

   },[])

   const joinRoom = (room)=>{
     if(currentRoom){
        socket.emit(eventF.leaveRoom,currentRoom);
     }
     setCurrentRoom(room);
     socket.emit(eventF.joinRoom,room);
   }

   const sendMessage = () =>{
    console.log("sendMessage")
    if(message && currentRoom){
        socket.emit(eventF.chatMessage,{room:currentRoom,message});
        setMessage("");
    }
   }

   return (
      <div>
        <div>
          <h2> Room List</h2>
          <ul>
            {
              rooms.map((r,index)=>(<li key={index} onClick={()=>joinRoom(r.room)}>
                {r.room} ({r.userCount} users) 
              </li> ))
            }
          </ul>
          <h2>Chat currentRoom ({currentRoom})</h2>
          <div>
          {
              list.map((msg,index)=>{
                return <div key={index}>
                      <strong> {msg.userId}</strong> <em>{msg.timestamp}</em> : {msg.content}
                </div>
              })
            }
          </div>

        </div>
        <input
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            onKeyUp={(e)=>e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
   )
}

export default App;