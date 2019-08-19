import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/auctions/:id" component={AuctionShowPage} />
        <Route exact path="/auctions" component={AuctionIndexPage} />
        <Route exact path="/" component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;