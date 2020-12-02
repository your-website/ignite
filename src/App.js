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
import SearchedGames from "./pages/SearchedGames";
import Footer from "./components/Footer";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimateSharedLayout type="crossfade">
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path={["searched/game/:id", "/searched"]}>
          <SearchedGames />
        </Route>
        <Route path={["/new/game/:id", "/new"]}>
          <NewGamesPage />
        </Route>
        <Route path={["/popular/game/:id", "/popular"]}>
          <PopularGamesPage />
        </Route>
        <Route path={["/upcoming/game/:id", "/upcoming"]}>
          <UpcomingGamesPage />
        </Route>
      </AnimateSharedLayout>
      <Footer />
    </div>
  );
}

export default App;
