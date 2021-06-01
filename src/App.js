import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <Landing></Landing>
        </div>
    );
}

export default App;
