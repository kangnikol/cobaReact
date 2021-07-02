import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./template/Navbar";
import Home from "./section/Home";
import About from "./section/about";
import Footer from "./template/Footer";
import Karousel from "./section/Carousel";
import Gallery from "./section/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Karousel />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Gallery />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
