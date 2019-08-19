30.times do
    username = Faker::Internet.username + rand(1..100).to_s
    User.create(
      username: username,
      email: "#{username.downcase}@example.com",
      password: "supersecret"
    )
  end
  
  users = User.all
  
  50.times do
    auction = Auction.create(
      title: Faker::Vehicle.make_and_model,
      description: Faker::Vehicle.standard_specs.sample,
      expiration_date: Faker::Date.forward(),
      price: rand(3_000..70_000),
      created_at: Faker::Date.backward(),
      user: users.sample
    )
  
    rand(0..30).times do 
      Bid.create(
        price: rand(auction.price..100_000),
        created_at: Faker::Date.backward(),
        auction_id: auction.id,
        user: users.sample
      )
    end
  end
  
  puts "Generated #{ Auction.all.count } auctions"
  puts "Generated #{ Bid.all.count } bids"
  puts "Generated #{ users.count } users"