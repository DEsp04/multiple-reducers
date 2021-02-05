import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="col">
        <div><span>A:</span><span>{props.a}</span></div>
        <button>Update A</button>
      </div>

      <div className="col">
        <div><span>B:</span><span>{props.b}</span></div>
        <button>Update B</button>
      </div>
    </div>
  );
}

export default App;
