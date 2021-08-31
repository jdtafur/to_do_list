import './App.css';
import Toolbar from "./components/toolbar/Toolbar";
import SectionsContainer from "./hoc/UI/sectionContainer/SectionsContainer";

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <SectionsContainer/>
    </div>
  );
}

export default App;
