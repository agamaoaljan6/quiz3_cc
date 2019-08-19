class Auction < ApplicationRecord
  belongs_to :user
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