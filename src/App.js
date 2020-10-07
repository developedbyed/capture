import React from "react";
//Import Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
