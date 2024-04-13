import Player from './components/Player.js';
import GameBoard from './components/GameBoard.js';
function App() {
  return (
    <main>
      <div id="game-container">
      <ol id="players">
       <Player initialName="player 1" symbol="X"/>
       <Player initialName="player 2" symbol="O"/>
      </ol>
      <GameBoard/>
      </div>
    </main>
  );
}
export default App
