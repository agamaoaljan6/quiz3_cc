class AddUserReferencesToAuctionsAndBids < ActiveRecord::Migration[5.2]
  def change
    add_reference :auctions, :user, foreign_key: true
    add_reference :bids, :user, foreign_key: true
  end
end