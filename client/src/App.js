import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AxiosAPI from "./components/AxiosAPI";
// import FetchAPI from "./components/FetchAPI";

function App() {
  return (
    <div className="App">
      <h1>This is our App</h1>
      {/* <FetchAPI /> */}
      <AxiosAPI />
    </div>
  );
}

export default App;