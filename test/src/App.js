import "./App.css";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
      <Hello/>
      <div className = {styles.box}>App</div>
    </div>
  );
}

export default App;
