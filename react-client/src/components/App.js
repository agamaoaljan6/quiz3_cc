import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import AuctionNewPage from "./AuctionNewPage";
import SignInPage from "./SignInPage";
import { Authenticate, Authenticator } from './Authenticator';
import User from "../api/user";

class App extends Component {
  state = {
    currentUser: null
  }

  getCurrentUser = () => {
    return User.current().then((user) => {
      this.setState({ currentUser: user });
    });
  };

  render() {
    return (
      <Authenticator>
      <BrowserRouter>
        <Authenticate>
          {providerValue => <NavBar auth={providerValue} />}
        </Authenticate>
      
          <Authenticate>
            {providerValue => (
              <Route 
                exact 
                path="/auction/new" component={AuctionNewPage} 
                render={(routeProps) => <AuctionNewPage {...routeProps} auth={providerValue} /> }
                />
              )}
          </Authenticate>
          <Route exact path="/auctions/:id" component={AuctionShowPage} />
          <Route exact path="/auctions" component={AuctionIndexPage} />
            <Authenticate>
              {providerValue => (
                <Route 
                exact 
                path="/login" 
                render={(routeProps) => <SignInPage {...routeProps} auth={providerValue} />}
                />
                )}
            </Authenticate>
          <Route exact path="/" component={WelcomePage} />
       
      </BrowserRouter>
    </Authenticator>
    );
  }
}

export default App;