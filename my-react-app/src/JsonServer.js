import React, { useState, useEffect } from "react";
import "./App.css";

function JsonServer() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <>
    <div className="App11">
        <div className="App12">
        <label>From</label>
    <select style={{padding:"10px",position:"relative", left:"10px"}}>
        {
        data.map((item) => 
          <option>{item.name}</option>
        )
        }
      </select>
      <br/><br/>
      <label>To</label>
      <select style={{padding:"10px",position:"relative", left:"31px"}}>
        {
        data.map((item) => 
          <option>{item.name}</option>
        )
        }
      </select>
      </div>
    </div>
     
    </>
  );
}

export default JsonServer;
