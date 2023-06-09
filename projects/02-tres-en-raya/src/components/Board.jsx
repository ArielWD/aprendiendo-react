import { Square } from './Square'
import { TURNS } from '../constants'
import { WinnerModal } from './WinnerModal'
export const Board = ({ updateBoard, resetGame, board, turn, winner }) => {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Restart</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <div className='turn__text'>
          <h2>Turno de :</h2>
        </div>
        <div className='turn__selection'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
