import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
