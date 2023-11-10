import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJoke] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      setJoke(response.data);
    });
  });
  console.log("jokes", jokes);

  return (
    <div>
      <p>Frontend + Backend</p>
      {jokes.map((ele) => (
        <div
          style={{
            border: "1px solid brown",
            width: "200px",
            marginBottom: "15px",
          }}>
          <h1>{ele.id}</h1>
          <h2>{ele.title}</h2>
          <h3>{ele.content}</h3>
        </div>
      ))}
    </div>
  );  
}

export default App;
