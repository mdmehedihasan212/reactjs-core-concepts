import logo from './logo.svg';
import './App.css';

const country = 'bangladesh';
const singer = { name: 'james', job: 'singer', catagory: 'band' }
const singerStyle = {
  color: 'blue',
  backgroundColor: 'white'
}
const singerStyle2 = {
  color: 'gold',
  backgroundColor: 'red'

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h1>Hello React</h1>
          <p>My Self Md Mehedi Hasan</p>
        </div>
        <div className="music">
          <p style={singerStyle}>Country: {country}</p>
          <p style={{ color: 'red', backgroundColor: 'yellow' }}>Singer: {singer.name}</p>
          <p style={singerStyle2}>Job: {singer.job}</p>
          <p style={{ color: 'white', backgroundColor: 'blue' }}>Catagory: {singer.catagory}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
