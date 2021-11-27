import "./App.css";
import { Status } from "./components/Status";
import { Heading } from './components/Heading'
import { Oscar } from "./components/Oscar";

function App() {

  return (
    <div className="App">
      <Status status='loading' />
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo</Heading>
      </Oscar>
    </div>
  );
}

export default App;
