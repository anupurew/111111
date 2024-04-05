import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import PracComponent from "./components/PracComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent></ClassComponent>

      <FunctionComponent />
      <PracComponent />
    </div>
  );
}

export default App;
