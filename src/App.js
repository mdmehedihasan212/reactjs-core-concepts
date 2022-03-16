import logo from './logo.svg';
import './App.css';

const friendsStyle = {
  color: 'white',
  backgroundColor: 'blue',
  border: '3px solid yellow',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px'
}

function App() {
  return (
    <div className="App">
      <Person nikeName="Sobuz" age="26" hight="5.9" job="salesman"></Person>
      <Person nikeName="mehedi" age="20" hight="5.8" job="salesperson"></Person>
      <Person nikeName="Sabuz" age="22" hight="5.9" job="salesrepresentative"></Person>
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      <Friends name="Monir" relation="School Life" contuct="Telegram" status="Good"></Friends>
      <Friends name="Bahadur" relation="Job Purpos" contuct="WhatsApp" status="Good"></Friends>
      <Friends name="Imran" relation="Job Purpos" contuct="Mobile" status="Good"></Friends>

    </div>
  );
}

export default App;

function Person(props) {
  console.log(props);
  return (
    <div className="personStyle">
      <h1>Md Mehedi Hasan</h1>
      <p>Nike Name: {props.nikeName} Age: {props.age} Height: {props.hight} Job: {props.job}</p>
    </div>
  );

}

function Family(props) {
  return (
    <div style={{ color: 'white', backgroundColor: 'green', border: '3px solid red', margin: '20px', borderRadius: '20px', padding: '20px' }}>
      <h1>I Have A Smile Family</h1>
      <p>Father: {props.father} Mother: {props.mother} Son: {props.son} Sister: {props.sister} Brother: {props.brother} Wife: {props.wife}</p>
    </div>
  )
}

function Friends(props) {
  return (
    <div style={friendsStyle}>
      <h1>I Have Some Good Friends</h1>
      <p>Name: {props.name} Relation: {props.relation} Status: {props.status} Contuct: {props.contuct}</p>
    </div>
  )
}