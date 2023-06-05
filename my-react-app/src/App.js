import React, {useState} from "react";
import './App.css';

function App() {
  const [data,setData]=useState("Manjunath");
  return (
   <>
   <h1>{data}</h1>
   <button onClick={()=>setData("Narayan")}>Update</button>
   </>
  );
}

export default App;
