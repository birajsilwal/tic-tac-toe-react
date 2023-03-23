import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    squaresCopy[i] = player;
    setSquares(squaresCopy);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const status = `Next player: ${player}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
