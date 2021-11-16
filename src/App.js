import ContextState from "./context/githubContext/ContextState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Layout from "./components/layout/Layout";
import "./scss/main.scss";

function App() {
  return (
    <ContextState>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/:id" element={<User />} />
          </Routes>
        </Router>
      </Layout>
    </ContextState>
  );
}

export default App;
