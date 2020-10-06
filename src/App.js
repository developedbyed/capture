import React from "react";
//Import Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
