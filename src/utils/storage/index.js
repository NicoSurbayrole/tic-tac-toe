export const setStorageGame = ({ newBoard, newTurn }) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);
};

export const resetState = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
};
