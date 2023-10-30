import React , {useState} from 'react';


const ModeThem = () => {
    let [mode,setMode]= useState(false);
    function dark(){
        
    setMode(true)
       
    }
    function light(){
      setMode(false)
    }
  return (
    <div style={{
        backgroundColor:mode ? "black" :"white"
    }} >
    <button onClick={dark}>dark</button>
    <button onClick={light}>light</button>
    </div>
  );
}

export default ModeThem