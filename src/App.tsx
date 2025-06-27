import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import WorkExperience from "./components/WorkExperience";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <WorkExperience />
    </div>
  );
}

export default App;
