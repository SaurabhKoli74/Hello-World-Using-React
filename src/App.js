import logo from './logo.svg';
import './App.css';

function App() {
  const name="Saurabh";
  const isLoggedIn=true;
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!isLoggedIn && <h1>Hello World</h1>}
          {isLoggedIn && "Hello "+name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
