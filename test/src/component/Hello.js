import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState();

  function changeName() {
    const newName = name === "hyeonho" ? "gyumin" : "hyeonho";
    //document.getElementById("name").innerText = name;
    setName(newName);
  }

  return (
    <div>
      <h1>state</h1>
      <h2 id = "name">{name}</h2>
      <button onClick= {changeName}>change</button>
    </div>
  );
}
