import './App.css';
import List from './list';
import TableFunc from './func';
import Greet from './Greet';
import Classlist from './classlist';
import Table from './Table';

function App() {
  const playerName=[
    {
    name:"Sakthi",
    age:21,
    role:"Allrounder"
  },
  {
    name:"Naga",
    age:23,
    role:"Batsman"
  },
  {
    name:"Sanjay",
    age:23,
    role:"batsman"
  },
  {
    name:"naveen",
    age:23,
    role:"bowler"
  },
  {
    name:"bala",
    age:20,
    role:"bowler"
  },
]
  const userDetails=[
    {
      name:"Sakthi",
      age:21,
      profession:"designer"
    },
    {
      name:"Bala",
      age:21,
      profession:"tester"
    },{
      name:"sanjay",
      age:20,
      profession:"developer"
    },{
      name:"Naga",
      age:23,
      profession:"tester"
    }
  ]

  const sports=[
    {
      pname:"Cricket"
    },
    {
      pname:"Football"
    },{
      pname:"Handball"
    },{
      pname:"Hockey"
    },{
      pname:"Kabbadi"
    }
  ]
  return(
    <div className="App">
      <h2>Functional Component</h2>
      <TableFunc userData={userDetails}/>

      <h2>Class Component</h2>
      <Classlist sportsName={sports}/>
      <Table team={playerName}/>
      <List sportsName={sports}/>
      <Greet use="worker" age="22"/>
    </div>
  );
}

export default App;
