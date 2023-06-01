import { WINNNER_COMBOS } from "../constants";

export const checkWinnerFor = (boardToCheck) => {
    for(const combo of WINNNER_COMBOS){
      const [a ,b, c] = combo 
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null
  }

export const checkEndGame = (newBoard) =>{
  return newBoard.every((square) => square !== null);
}