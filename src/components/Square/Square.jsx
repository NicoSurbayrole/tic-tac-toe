
// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, board ,index, winner, turn,setBoard,setTurn,setWinner}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handelClick = () => updateBoard({index,winner,turn,board,setBoard, setTurn,setWinner});
  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

export default Square;