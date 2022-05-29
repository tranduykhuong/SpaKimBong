import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
