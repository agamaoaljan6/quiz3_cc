class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
    validates(:title, presence: true)
    validates(:expiration_date, presence: true)

    validates(
      :description,
      presence: true, 
      length: { minimum: 10 }
    )
  
    validates(
      :price, 
      numericality: { greater_than: 0 }
    )
  end