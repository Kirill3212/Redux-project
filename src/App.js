import "./App.css";
import Likes from "./Likes";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="diving" />
            <Likes></Likes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
