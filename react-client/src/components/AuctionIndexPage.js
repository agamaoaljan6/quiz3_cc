import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Auction from "../api/auction";

class AuctionIndexPage extends Component {
  state = {
    auctions: []
  };

  componentDidMount() {
    Auction.index().then(auctions => {
      this.setState({ auctions });
    });
  }

  deleteauction(id) {
    this.setState({
      auctions: this.state.auctions.filter(q => q.id !== id)
    });
  }

  render() {
    return (
      <main className="Page">
        <h2>Auctions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
          }}
        >
          {this.state.auctions.map(auction => (
              <li 
                key={auction.id}
                style={{
                  marginBottom: "20px"
                }}
              >
                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link><br/>
                Posted on { auction.created_at }
              </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionIndexPage;