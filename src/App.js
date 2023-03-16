import { useRef, useState } from "react";
import "./App.css";

function App() {
  const getcloud = () =>
    `random elon musk mark gate toyota suzuki yamaha mehran swift corolla jeep cultus hispeed chopper mars earth juppter sun`
      .split(" ")
      .sort(() => (Math.random() > 0.5 ? 1 : -1));

  const [updateValue, setUpdateValue] = useState("");
  const cloud = useRef(getcloud());
  const [activeIndex, setActiveIndex] = useState(0);
  const [right, setright] = useState("");
  console.log(cloud.current[1]);
  const checking = () => {
    if (updateValue === cloud.current[activeIndex]) {
      return setright("right");
    } else {
      return setright("Wrong");
    }
  };
  console.log(right);
  function processInput(value) {
    if (value.endsWith(" ")) {
      setActiveIndex((index) => index + 1);
      setUpdateValue("");
    } else {
      setUpdateValue(value);
    }
  }

  return (
    <div className="App">
      <h1>type here</h1>
      <p>
        {cloud.current.map((word, index) => {
          if (index === activeIndex) {
            return <b>{word} </b>;
          }

          return <span>{word}</span>;
        })}
      </p>
      <span>{right}</span>
      <button onClick={checking}>space</button>
      <input
        type="text"
        value={updateValue}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
}

export default App;
