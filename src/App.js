import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from './components/Cards'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
            <Routes>
              <Route />
            </Routes>
      </BrowserRouter>
      <div className="App">
      <Cards/>
      </div>
    </div>
  );
}

export default App;


