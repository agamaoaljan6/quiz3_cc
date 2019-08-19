import React, { Component } from "react";
import Auction from "../api/auction";

export class AuctionShowPage extends Component {
  state ={
    auction: null
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    Auction.show(id).then(auction => {
      console.log(auction)
      this.setState({ auction });
    });
  }

  createBid() {

  }

  render() {
    const { auction } = this.state;
    if (!auction) {
      return (
        <h1>Loading...</h1>
      );
    }

    return (
      <main>
        <h1>{auction.title}</h1>
        <p>{auction.description}</p>
        <form onSubmit={e => this.createBid(e)}>
          <input name="price" />
          <input type="submit" value="Bid" />
        </form>
        <h2>Previous Bids</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
          }}
        >
          {auction.bids.map(bid => (
            <li 
              key={bid.id}
              style={{
                marginBottom: "20px"
              }}
            >
              {bid.price} on {bid.created_at}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionShowPage;