import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  let personName = {
    first: "Bruce",
    last: "Mane",
  };

  let nameList = [
    {
      first: "Mitko",
      last: "Berbatov",
    },
    {
      first: "Lewis",
      last: "Hamilton",
    },
    {
      first: "Max",
      last: "Verstapen",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vishwas" messages={10} isLogIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
