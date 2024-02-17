import './App.css';
import { useState } from 'react';
import GameBoard from './Components/GameBoard';
import { CommentContextFunction } from "./Context/CommentContext"
import { io } from "socket.io-client"

export const socket = io("http://localhost:7000")

const App = () => {

  const [ cellSelected, setCellSelected ] = useState<bool>(false);

  const { currentPlayer, switchPlayer } = CommentContextFunction();
  // const [ player, setPlayer ] = useState<string>()

  const cells = document.querySelectorAll(".cell");

  // socket.emit('find_player', {'name'})


  return (
    <div className="app">
        <GameBoard />
        <div className="comments"> <span className="player">White</span> to Play</div>
    </div>
  )
}

export default App
