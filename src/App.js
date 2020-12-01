import React from "react";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
