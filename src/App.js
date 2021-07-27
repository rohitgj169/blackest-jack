import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player';
import Dealer from './components/Dealer/Dealer';
import Deck from './components/Deck/Deck';

function App() {
  return (
    <div className="App">
      <Dealer/>
      <Deck/>
      <Player/>
    </div>
  );
}

export default App;
