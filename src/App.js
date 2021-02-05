import './App.css';
import { connect } from 'react-redux'


function App(props) {
  return (
    <div className="App">
      <div className="col">
        <div><span>A:</span><span>{props.a}</span></div>
        <button onClick={() => props.updateA(props.b)}>Update A</button>
      </div>

      <div className="col">
        <div><span>B:</span><span>{props.b}</span></div>
        <button  onClick={() => props.updateB(props.a)}>Update B</button>
      </div>
    </div>
  );
}



const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
};


//Action which will be sent to reducer
const mapDispatchToProps = (dispatch) => { 

//b:b & a:a are the payload; Payload will arrive as an action in reducers
  return {
    updateA: (b) => dispatch({ type: 'UPDATE_A', b: b }),
    updateB: (a) => dispatch({ type: 'UPDATE_B', a: a })
  }
}




export default connect(mapStoreToProps, mapDispatchToProps)(App);
