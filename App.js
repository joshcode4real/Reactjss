import "./App.css";
import About from "./mainComponent/About";
import Contact from "./mainComponent/Contact";
import HeaderFile from "./mainComponent/HeaderFile";
import Home from "./mainComponent/Home";
import NavBar from "./mainComponent/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
