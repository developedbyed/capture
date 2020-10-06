import React from "react";
//Import Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
