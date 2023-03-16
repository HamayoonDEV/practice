import { useState } from "react";
import "./App.css";

function App() {
  const [updateValue, setUpdateValue] = useState("");
  return (
    <div className="App">
      <h1>type here</h1>
      <p>{updateValue}</p>
      <input
        type="text"
        value={updateValue}
        onChange={(e) => setUpdateValue(e.target.value)}
      />
    </div>
  );
}

export default App;
