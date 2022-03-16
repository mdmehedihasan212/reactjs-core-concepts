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
const singers = [
  { name: 'asif', job: 'singer', catagory: 'cheka' },
  { name: 'aiub bacchu', job: 'singer', catagory: 'tara' },
  { name: 'james', job: 'singer', catagory: 'cheka2' }
]

function App() {
  const nayoks = ['razzak', 'alomgir', 'josim', 'salman shah', 'manna', 'chancol choudury'];

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Friends name={singer.name}></Friends>)
      }
      {/* <Person nikeName={nayoks[0]} age="20" hight="5.8" job="salesperson"></Person>
      <Person nikeName={nayoks[1]} age="20" hight="5.8" job="salesperson"></Person>
      <Person nikeName={nayoks[2]} age="22" hight="5.9" job="salesrepresentative"></Person> */}
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      <Family mother="Selina Haque" son="Abdus Sami" sister="Aliza" brother="shawon" wife="samiya"></Family>
      {/* <Friends name="Monir" relation="School Life" contuct="Telegram" status="Good"></Friends>
      <Friends name="Bahadur" relation="Job Purpos" contuct="WhatsApp" status="Good"></Friends>
      <Friends name="Imran" relation="Job Purpos" contuct="Mobile" status="Good"></Friends> */}

    </div>
  );
}

export default App;

function Person(props) {
  console.log(props);
  return (
    <div className="personStyle">
      <h1>{props.name}</h1>
      <p></p>
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
      <h1>{props.name}</h1>
    </div>
  )
}