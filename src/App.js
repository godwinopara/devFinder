import ContextState from "./context/githubContext/ContextState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Layout from "./components/layout/Layout";
import "./scss/main.scss";

function App() {
  return (
    <ContextState>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:login" component={User} />
          </Switch>
        </Router>
      </Layout>
    </ContextState>
  );
}

export default App;
