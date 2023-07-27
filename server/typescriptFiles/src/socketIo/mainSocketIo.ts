import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { GameSendInformation } from "../interfaces";
import { tableWithPlayingRooms } from "../data/data";
import gameWinner from "../controllers/gameWinner";

const mainSocketIo = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
  socketIo: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  const query = socket.handshake.query;
  const roomName = query.roomName;
  if (roomName) {
    socket.join(roomName);
    socket.on("disconnect", (reason) => {
      console.log("disconnect");
      console.log(reason);
    });
    
    socket.on("send", (data:{room:string, data:GameSendInformation, msg:string}) => {
      console.log(data);
      let changedMsg = data
      //const room = tableWithPlayingRooms.filter(ele=>ele.id=msg.room)[0]
      //console.log(room)
      if(changedMsg.data.movingSide===changedMsg.data.players[0]){
        changedMsg.data.movingSide=changedMsg.data.players[1]
      }else{
        changedMsg.data.movingSide=changedMsg.data.players[0]
      }

      if(data.msg==="Finish game"){
        let winner = "player1"
        if(data.data.player1<data.data.player2){
          winner = "player2"
        }else if(data.data.player1===data.data.player2){
          winner="draw"
        }
        changedMsg.msg=winner
        socketIo.to(roomName).emit("send", changedMsg);
        gameWinner(changedMsg)
      }else{
        socketIo.to(roomName).emit("send", changedMsg);
      }

      //if(changedMsg.movingPlayer===)
      
    });
  }
};

export default mainSocketIo;
