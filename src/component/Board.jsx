import { calculateWinner } from '../utils/calculate';
import Square from './Square';

export default function Board({xIsNext, squares, onPlay}){
  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  function handleClick(i) {
    if ( winner || squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X"
    } else{
      nextSquares[i] = "O"
    }
   onPlay(nextSquares)

  }

  let status;
  if (winner) {
    status = (
            <>
              <span className='winner-status'>Winner: </span> {winner}
            </>
          )
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return(
    <>
        <div className='status'>{status}</div>
        <div className='board-row'> 
            <Square value={squares[0]} onSquareClick={()=> handleClick(0)} highlight={winningLine.includes(0)}  />
            <Square value={squares[1]} onSquareClick={()=> handleClick(1)} highlight={winningLine.includes(1)}/>
            <Square value={squares[2]} onSquareClick={()=> handleClick(2)} highlight={winningLine.includes(2)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[3]} onSquareClick={()=> handleClick(3)} highlight={winningLine.includes(3)}/>
            <Square value={squares[4]} onSquareClick={()=> handleClick(4)} highlight={winningLine.includes(4)}/>
            <Square value={squares[5]} onSquareClick={()=> handleClick(5)} highlight={winningLine.includes(5)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[6]} onSquareClick={()=> handleClick(6)} highlight={winningLine.includes(6)} />
            <Square value={squares[7]} onSquareClick={()=> handleClick(7)} highlight={winningLine.includes(7)} />
            <Square value={squares[8]} onSquareClick={()=> handleClick(8)} highlight={winningLine.includes(8)}/>
        </div>
    </>
   
  )
}