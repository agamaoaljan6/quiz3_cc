import { BASE_URL } from "../config";

const Bid = {
  create(id) {
    return fetch(`${BASE_URL}/auctions/${id}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
      // body: JSON.stringify(params)
    }).then(res => res.json());
  }
}

export default Bid;