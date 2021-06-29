import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./about";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
