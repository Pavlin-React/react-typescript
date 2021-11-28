import "./App.css";
import { Status } from "./components/Status";
import { Heading } from './components/Heading'
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";
import { Button } from "./components/Button";

function App() {

  return (
    <div className="App">
      <Button clickEvent={() => {
        console.log('Button Clicked');
        
      }} />
    </div>
  );
}

export default App;
