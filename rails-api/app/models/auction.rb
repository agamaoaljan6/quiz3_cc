class Auction < ApplicationRecord
    validates(:title, presence: true)
    validates(:date, presence: true)
  
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