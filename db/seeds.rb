puts "Starting seed"

#User seed data
50.times do 
    username = Faker::Internet.unique.username(specifier:3..25)
    password = Faker::Internet.password(min_length: 6, max_length: 20)
    profile_picture = "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/all"
    profile_bio = Faker::Lorem.paragraph(sentence_count: 4)
    User.create(username: username, password: password, profile_picture: profile_picture, profile_bio: profile_bio)
end

cat = User.create(username: "catho", password: "password1", profile_picture: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", profile_bio: "heeeeeeeeeeeeeeeeeeeeeeeey")
romy = User.create(username: "romy", password: "password1", profile_picture: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", profile_bio: "testest")

#Restaurant seed data
20.times do
    restaurant_name = Faker::Restaurant.unique.name
    category = Faker::Restaurant.type
    total_rating = Faker::Number.between(from: 0, to: 5)
    image = "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/restaurant"
    location = Faker::Address.unique.full_address
    Restaurant.create(restaurant_name: restaurant_name, category: category, image: image, location: location)
end

#Post seed data
User.all.each do |user|
	# rand(1..2) times do
		restaurant = Restaurant.find(Restaurant.pluck(:id).sample)
		
		Post.create!(user_id: user.id, restaurant_id: restaurant.id, likes: Faker::Number.between(from: 0, to: 100), dislikes: Faker::Number.between(from: 0, to:100), rating: Faker::Number.between(from:0, to: 5), review: Faker::Restaurant.review, image: "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/restaurant")
    # end
end
puts "Finished planting seed data!"