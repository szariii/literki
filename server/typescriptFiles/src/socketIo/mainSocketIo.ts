import { Server, Socket } from "socket.io"
import { DefaultEventsMap } from "socket.io/dist/typed-events"

const mainSocketIo=(socket:Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,socketIo:Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)=>{
    const query = socket.handshake.query
    const roomName = query.roomName
    if(roomName){
      socket.join(roomName)
      socket.on("send",(msg)=>{
        console.log(msg)
        socketIo.to(roomName).emit("send",msg)
      })
    }
}


export default mainSocketIo