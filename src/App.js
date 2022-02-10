import "./App.scss";
import StartPage from "./pages/StartPage/StartPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage></StartPage>} />
          <Route path="/second" element={<SecondPage></SecondPage>} />
          <Route path="/third" element={<ThirdPage></ThirdPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
