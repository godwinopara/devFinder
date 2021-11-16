import ContextState from "./context/githubContext/ContextState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/main.scss";

function App() {
  return (
    <ContextState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="users/:id" element={<User />} />
        </Routes>
      </Router>
    </ContextState>
  );
}

export default App;
