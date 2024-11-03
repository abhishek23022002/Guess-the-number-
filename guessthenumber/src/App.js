import "./App.css";
import { useState} from "react"

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
      <input type="text" id="term" name="term " onChange={clicking}/>
    </div>
  );
}

export default App;
