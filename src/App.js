import "./App.css";
import Fetch from "./component/Fetch";
import {useState} from "react";
import Styled from "./component/Styled";


function App() {
  const  [inputValue, setInputValue] =  useState('');
  const [data,setData]=useState([])
  const  handleChange = (event) => {
    // console.log(event);
		setInputValue(event.target.value);
	};
  function add(){
    setData([...data,inputValue])
    // data.push(inputValue)
    setInputValue('');
  }
  
  return (
    <div className="App">
{/* <input type="text" value={inputValue} onChange={handleChange} />
<button onClick={add}>submit</button>
    <Fetch data={data}/> */}
      
      <Styled/>
    </div>
  );
}

export default App;
