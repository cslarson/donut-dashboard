import DonutLogo from './img/donut-logo.png';
import EthtraderDonutsLogo from './img/ethtraderdonuts.png';
import Ticker from './components/Ticker'
import Body from './components/Body'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-style">
        <div class="inline-block">
          <img src={DonutLogo} className="App-logo" alt="logo" />   
        </div>
        
        <div class="inline-block">
          <img src={EthtraderDonutsLogo} />        
        </div>
      </header>
      <body className="body-style">
        <Ticker></Ticker>
        <Body></Body>
      </body>
    </div>
  );
}

export default App;
