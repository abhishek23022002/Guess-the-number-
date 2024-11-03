import "./App.css";
import { useState} from "react"
import Result from "./result";
const randomNumber = Math.floor(Math.random() * 10) + 1;
function App() {
  const [term, setterm]= useState("")
  
  function clicking(params) {
    setterm(params.target.value)
    console.log("Text",term)
  }
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term"> Enter the number beteen 1 to 10</label>
      </div>
      <input type="number" id="term" name="term " onChange={clicking} />
      <div className="hello">
        <Result randomNumber={randomNumber} term = {term}/>
      </div>
    </div>
  );
}

export default App;
