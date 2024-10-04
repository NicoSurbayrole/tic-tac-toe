import Square from "../Square";

// eslint-disable-next-line react/prop-types
const WinnerModal = ({winner, restartGame,setBoard,setTurn,setWinner}) => {
  
  if (winner === null) return null;

  const handelClick = () => restartGame({setBoard,setTurn,setWinner})
  const winnerText = winner === false ? "Empate" : "Gano:"
  
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={handelClick}>Juego nuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;