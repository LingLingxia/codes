import React ,{useEffect ,useState} from "react";
import {io} from "socket.io-client";

const socket = io("http://localhost:3000");//后端
const eventB = "chat message - from backend"
const eventF = "chat message - from frontend"
function App(){
   const [list,setList] = useState([]);
   const [message,setMessage] = useState("");
   const [userId,setUserId] = useState("");

   useEffect(()=>{
    const storedId = sessionStorage.getItem("userId");
    if(storedId){
      setUserId(storedId);
    }else{
      const newId = prompt("Enter your unique ID:");
      sessionStorage.setItem("userId",newId);
      setUserId(newId);
    }
    socket.on(eventB,(msg)=>{
      console.log("message come",msg);
      console.log(list.length);
      setList(prevMessages=>[...prevMessages,msg])
    })

    return () => {
      socket.off(eventB); //非常重要，不加这一句会导致消息被接受两遍
    };

   },[])

   const sendMessage = () =>{
    const newMessage = {
      userId,
      content:message,
      timestamp:new Date().toLocaleTimeString()
    }
    console.log("message send",newMessage);
    socket.emit(eventF,newMessage);
    setMessage("");
   }

   return (
      <div>
        <div>
            {
              list.map((msg,index)=>{
                return <div key={index}>
                      <strong> {msg.userId}</strong> <em>{msg.timestamp}</em> : {msg.content}
                </div>
              })
            }
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