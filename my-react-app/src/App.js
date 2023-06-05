import React, {useState,useEffect} from "react";
import './App.css';


function App() {
  const[data,setData]=useState("");
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    result.json().then((resp)=>{
console.log(resp);
    });
  });
 },[]);
//  console.log(data);
try {
  JSON.parse(data);
}
catch (error) {
  console.log('Error parsing JSON:', error, data);
}
  return (
   <>
<h1>Manjunath</h1>
   </>
  );
}

export default App;
