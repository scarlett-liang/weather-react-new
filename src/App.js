import Forecast from "./forecast";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Forecast defaultCity="Frankfurt" />
      </div>
      <footer className="developer">
        <a
          href="https://github.com/scarlett-liang/weather-react-new"
          target="_blank"
          rel="noreferrer"
          className="gitLink"
        >
          GitHub </a> open-source code by 👩🏻‍💻 Scarlett Liang
      </footer>
      </div>
    
  );
}

export default App;
