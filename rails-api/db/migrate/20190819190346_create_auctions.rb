class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.datetime :expiration_date
      t.float :price

      t.timestamps
    end
  end
end