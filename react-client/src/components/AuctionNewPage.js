import React, { Component } from "react";
import Auction from "../api/auction";
import Session from "../api/session";

export class AuctionNewPage extends Component {
  createAuction(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Auction.create({
      title: formData.get("title"),
      description: formData.get("description"),
      expiration_date: formData.get("expiration_date"),
      price: formData.get("price")
    })
    .then(data => {
      if (!data.errors) {
        this.props.history.push(`/auctions/${data.id}`);
      }
    });
  }

  render() {
    return (
      <main className="Page">
        <h1>Create An Auction</h1>
        <form onSubmit={event => this.createAuction(event)}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input name="title" id="title" />
          </div>
          <div>
            <label htmlFor="description">Description</label> <br />
            <textarea name="description" id="description" cols="60" rows="4" />
          </div>

          <div>
            <label htmlFor="expiration_date">Ends at</label> <br />
            <input name="expiration_date" id="expiration_date" cols="60" rows="4" />
          </div>
          <div>
            <label htmlFor="price">Price</label> <br />
            <input type="number" name="price" id="price" cols="60" rows="4" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    );
  }
}

export default AuctionNewPage;
