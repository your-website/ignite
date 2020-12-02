import React from "react";
// Router
import { Route } from "react-router-dom";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NewGamesPage from "./pages/NewGames";
import PopularGamesPage from "./pages/PopularGames";
import UpcomingGamesPage from "./pages/UpcomingGames";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Route path={["/game/:id", "/new"]}>
        <NewGamesPage />
      </Route>
      <Route path={["/game/:id", "/popular"]}>
        <PopularGamesPage />
      </Route>
      <Route path={["/game/:id", "/upcoming"]}>
        <UpcomingGamesPage />
      </Route>
    </div>
  );
}

export default App;
