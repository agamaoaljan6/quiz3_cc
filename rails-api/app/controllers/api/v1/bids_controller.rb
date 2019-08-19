class Api::V1::BidsController < ApplicationController
    def create 
      auction = Auction.find params[:auction_id]
      bid = Bid.new params.require(:bid).permit(:price)
      bid.auction = auction
  
      bid.save!
      render json: { id: bid.id }
    end
  end