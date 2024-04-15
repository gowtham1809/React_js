import { useState } from "react";
import Player from "./components/Player.js";
import GameBoard from "./components/GameBoard.js";
import Log from "./components/Log.js";
import GameOver from "./components/GameOver.js";
import { WINNING_COMBINATIONS } from "./winning_combination.js";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameboard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  return gameboard;
}

function deriveActiveplayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameboard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSymbol = gameboard[combination[1].row][combination[1].column];
    const tnirdSymbol = gameboard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === tnirdSymbol
    )
      winner = players[firstSymbol];
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setgameTurns] = useState([]);
  const activeplayer = deriveActiveplayer(gameTurns);
  const gameboard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameboard, players);
  const hasdraw = gameTurns.length === 9 && !winner;

  function handleMatrix(rowIndex, colIndex) {
    setgameTurns((prevTurns) => {
      const currentPlayer = deriveActiveplayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  
  function handleRestart() {
    setgameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevplayer) => {
      return {
        ...prevplayer,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      {/* <h1>Tic-Tac-Toe</h1> */}
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activeplayer === "X"}
            onChangeName={handlePlayerNameChange}
          />

          <Player
            initialName="player 2"
            symbol="O"
            isActive={activeplayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasdraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectMatrix={handleMatrix} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
export default App;


