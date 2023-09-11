import "./App.css";
import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";
import Spin from "./Spin";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spin></Spin>
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="diving" />
            <Title></Title>
            <Likes></Likes>
          </div>
          <Comments></Comments>
        </div>
      </div>
    </div>
  );
}

export default App;
