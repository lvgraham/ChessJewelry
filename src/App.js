import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router Basename="/*">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/shop" component={Shop} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
