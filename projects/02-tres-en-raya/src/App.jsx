import confetti from 'canvas-confetti'
import { useState } from "react"
import { TURNS } from "./constants";
import { checkWinnerFor, checkEndGame } from "./logic/board";
import { Board } from "./components/Board.jsx";


function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);
const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}
const updateBoard = (index) => {

  if(board[index]|| winner )return;
  const newBoard = [... board]
  newBoard[index] = turn
  setBoard(newBoard);

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  window.localStorage.setItem('board', JSON.stringify(newBoard));
  window.localStorage.setItem('turn', newTurn);

  const newWinner = checkWinnerFor(newBoard);
  if (newWinner) {
    confetti();
    setWinner(newWinner)
  } else if(checkEndGame(newBoard)){
    setWinner(false);
  }
}
  return (
    <>
    <Board 
    updateBoard={updateBoard} 
    resetGame={resetGame} 
    board={board} 
    turn={turn} 
    winner={winner}>
    </Board>
    </>
  )
}

export default App
