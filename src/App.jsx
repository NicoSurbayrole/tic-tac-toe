import "./app.css";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import Game from "./components/Game";
import { useState } from "react";
import { TURNS } from "./constantes";
import { updateBoard, restartGame } from "./utils";

function App() {
  //para dibujar el tablero, no hacer condicionales ni bucles a un useState porque react pierde la referencia
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem("board");
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem("turn");
    return turnStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null = no hay ganador, false = empate

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={() => restartGame({ setBoard, setTurn, setWinner })}>
        Juego nuevo
      </button>
      <section className="game">
        <Game
          board={board}
          updateBoard={updateBoard}
          winner={winner}
          turn={turn}
          setBoard={setBoard}
          setTurn={setTurn}
          setWinner={setWinner}
        />
      </section>
      <section className="turn">
        <Square isSelected={TURNS.X === turn}>{TURNS.X}</Square>
        <Square isSelected={TURNS.O === turn}>{TURNS.O}</Square>
      </section>
      <WinnerModal
        setBoard={setBoard}
        setTurn={setTurn}
        setWinner={setWinner}
        winner={winner}
        restartGame={restartGame}
      />
    </main>
  );
}

export default App;
// turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
