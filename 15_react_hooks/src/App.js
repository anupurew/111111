import UseMemo from "./components/UseMemo";
import UseCallback1 from "./components/UseCallback1";
import UseReducer from "./components/UseReducer";
import CustomHook from "./components/Costomhook";
function App() {
  return (
    <div className="App">
      <UseMemo></UseMemo>
      <UseCallback1></UseCallback1>
      <UseReducer></UseReducer>
      <CustomHook></CustomHook>
    </div>
  );
}

export default App;
