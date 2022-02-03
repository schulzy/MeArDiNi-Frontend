import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import GameBoard from './GameBoard.jsx'
import Lobby from './Lobby.jsx';
import './GameSpace.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

const GameSpace = () => {
    const [counter, setCounter] = useState(0);
    
    const [connection,setConnection] = useState();
    const [rolledNumber, setRolledNumber] = useState();

    const joinGame = async (user, room) => {
        try{
          const connection = new HubConnectionBuilder()
          .withUrl("https://localhost:7024/gamespace")
          .configureLogging(LogLevel.Information)
          .build();
    
          console.log('joinGame init');
    
          connection.on("ReceiveMessage", 
          (user, message)  => {
            //setMessages(messages => [...messages,{user,message}]);
            console.log('message received: ', message);
          });

          connection.on("ReceiveRollValue", 
          (user, message)  => {
                setRolledNumber(message);
                setCounter(counter => counter + 1);
                console.log('message received: ', message);
          });
          
    
          connection.onclose(e=> {
            setConnection();
            //setMessages([]);
            
          })
    
          await connection.start();
          await connection.invoke("JoinGame", {user, room})
          setConnection(connection);
        }
        catch (e){
          console.log(e);
        }
      }
    
    const closeConnection = async () => {
        try{
          //await connection.stop();
        }
        catch(e){
          console.log(e);
        }
      }

    return (
        <div>
            Game Space
            {!connection
            ? <Lobby joinGame={joinGame}/>
            : <GameBoard connection={connection} rolledNumber={rolledNumber} counter={counter}/>}
        </div>
    );
}

export default GameSpace;