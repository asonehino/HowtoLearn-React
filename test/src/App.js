import './App.css';

function App() {
  const name = 'John Doe';
  const naver = {
    name: "Naver",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{
        color: "red",
        backgroundColor: "yellow",
        padding: "20px",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px"
      }}
      >
        welcome to React, {name}!
        <a href = {naver.url}>{naver.name}</a>
      </h1>
    </div>
  );
}

export default App;
