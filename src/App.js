import Input from "./Input";
import Square from "./Square";
import { useState } from "react"

function App() {
  const [colourValue, setColourValue] = useState("")
  return (
    <div className="App">
      <Square colourValue={colourValue} />
      <Input 
        colourValue={colourValue}
        setColourValue={setColourValue}
      />
    </div>
  );
}

export default App;
