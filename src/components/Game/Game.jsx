import Square from "../Square";

const Game = ({ board, updateBoard, winner,turn,setBoard,setTurn,setWinner }) => {
  return board.map((square, index) => {
    return (
      <Square key={index} updateBoard={updateBoard} board={board} index={index} winner={winner} turn={turn} setBoard={setBoard} setTurn={setTurn} setWinner={setWinner}>
        {square}
      </Square>
    );
  });
};

export default Game;
