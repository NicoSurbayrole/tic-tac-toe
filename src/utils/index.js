import confetti from "canvas-confetti";
import { WINNER_COMBOS } from "../constantes";
import { TURNS } from "../constantes";
import { setStorageGame, resetState } from "./storage";

export const checkWinner = (boardToCheck) => {
  for (const combos of WINNER_COMBOS) {
    const [a, b, c] = combos;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    )
      return boardToCheck[a];
  }
  return null;
};

//el every sirve para saber si todas las posiciones del arreglo cumplen la condicion dada
export const checkEndGame = (newBoard) =>
  newBoard.every((square) => square !== null);

export const checkResult = ({ setTurn, newTurn, newBoard, setWinner }) => {
  setTurn(newTurn);
  const newWinner = checkWinner(newBoard);
  if (newWinner) {
    confetti();
    setWinner(newWinner);
  } else if (checkEndGame(newBoard)) setWinner(false);
};

export const updateBoard = ({
  index,
  board,
  winner,
  turn,
  setBoard,
  setTurn,
  setWinner,
}) => {
  //evitamos actualizar la posicion si ya tiene algo
  if (board[index] || winner) return;
  //creamos una copia del arr para no mutar el original ya que debemos tratarlo como si fura inmutable
  //al igual q las props
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  //mostramos el turno y actualizamos
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

  //guardar partida
  setStorageGame({ newBoard, newTurn });

  checkResult({ setTurn, newTurn, newBoard, setWinner });
};

export const restartGame = ({ setBoard, setTurn, setWinner }) => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);
  resetState();
};
