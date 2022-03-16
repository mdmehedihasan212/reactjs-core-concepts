import logo from './logo.svg';
import './App.css';

const friendsStyle = {
  color: 'goldenrod',
  backgroundColor: 'blue',
  border: '3px solid black',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Family></Family>
      <Family></Family>
      <Family></Family>
      <Friends></Friends>
      <Friends></Friends>
      <Friends></Friends>

    </div>
  );
}

export default App;

function Person() {
  return (
    <div className="personStyle">
      <h1>Md Mehedi Hasan</h1>
      <p>This Time Is My Life Is Verry Bad Momment But I don't Tention Because Allah Alaways Save Me Any Problem In My Life Its Belive Me</p>
    </div>
  );

}

function Family() {
  return (
    <div style={{ color: 'white', backgroundColor: 'goldenrod', border: '3px solid red', margin: '20px', borderRadius: '20px', padding: '20px' }}>
      <h1>I Have A Smile Family</h1>
      <p>Sami Is My Son And Samiya Is My Lovely Wife And My Mother Is My Heart And My MaMa Is Too Good</p>
    </div>
  )
}

function Friends() {
  return (
    <div style={friendsStyle}>
      <h1>I Have Some Good Friends</h1>
      <p>Monir And Bahadur And Imran Are Goods Friend My Lost Life Time</p>
    </div>
  )
}