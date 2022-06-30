
puts "Starting seed"

#User seed data
5.times do 
    username = Faker::Internet.unique.username(specifier:3..25)
    password_digest = Faker::Internet.password(min_length: 6, max_length: 20)
    profile_picture = Faker::LoremFlickr.image(search_terms: ['person'])
    profile_bio = Faker::Lorem.paragraph(sentence_count: 2)
    User.create(username: username, password_digest: password_digest, profile_picture: profile_picture, profile_bio: profile_bio)
end

cat = User.find_or_create_by(username: "cat", password_digest: "password1", profile_picture: "../assets/IMG_8571.jpg", profile_bio: "eating food all the time nom nom nom!")
cooper = User.find_or_create_by(username: "cooper", password_digest: "password1", profile_picture: "../assets/IMG_5600.jpeg", profile_bio: "hi!! I love car rides! Especially to restaurants!")
romy = User.find_or_create_by(username: "romy", password_digest: "password1", profile_picture: "../assets/IMG_7423.jpeg", profile_bio: "I love potatoes so much even my friends call me potato")
benny = User.find_or_create_by(username: "benny", password_digest: "password1", profile_picture: "../assets/IMG_7427.jpeg", profile_bio: "More restaurants?? YAWN!")


#Restaurant seed data
20.times do
    restaurant_name = Faker::Restaurant.unique.name
    category = Faker::Restaurant.type
    total_rating = Faker::Number.between(from: 0, to: 5)
    image = Faker::LoremFlickr.image(search_terms: ['food'])
    location = Faker::Address.unique.full_address
    Restaurant.create(restaurant_name: restaurant_name, category: category, total_rating: total_rating, image: image, location: location)
end

res1 = Restaurant.create(restaurant_name: "Red Lobster", category: "Seafood", total_rating: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Red_Lobster_Restaurant_Yonkers_NY_October_2012.jpg', location: "CROSS COUNTY MALL, 5135 Xavier Dr, Yonkers, NY 10704")
res2 = Restaurant.create(restaurant_name: "Golden Corral", category: "Buffet", total_rating: 2, image: 'https://www.goldencorral.com/wp-content/uploads/2019/07/golden-corral-building.jpg', location: "1630 N Monroe St, Tallahassee, FL 32303")
res3 = Restaurant.create(restaurant_name: "Subway", category: "Sandwich", total_rating: 3, image: 'https://cdn.usarestaurants.info/assets/uploads/0f4fb4b18e3fc00a1af39996e17b016d_-united-states-louisiana-caddo-parish-11-shreveport-subway-318-364-8889htm.jpg', location: "9252 Mansfield Rd, Shreveport, LA 71118")
res4 = Restaurant.create(restaurant_name: "Cheesecake Factory", category: "American", total_rating: 5, image: 'https://www.thecheesecakefactory.com/sites/default/files/styles/slide_image/public/2021-11/1270x900-CCF-Cerritos.jpg?itok=Dl_1CeOu', location: "5530 Glades Rd, Boca Raton, FL 33431")

#Post seed data
post1 = Post.create(user_id: cat.id, restaurant_id: res4.id, likes: 3, dislikes: 1, rating: 4, review: "The cake was extra cheesy, just the way I like it. Parking wasn't great.", image: "https://images.squarespace-cdn.com/content/v1/5510c3c8e4b017881a01534f/1538595228166-Z1K6KV2E6PNJ9091W91X/IMG_1507.jpg?format=2500w")
post2 = Post.create(user_id: cat.id, restaurant_id: res1.id, likes: 12, dislikes: 3, rating: 5, review: "Food is good everytime we come. We even take some biscuits home - they're that good!", image: "https://www.aspicyperspective.com/wp-content/uploads/2015/06/cheddar-bay-biscuits-10.jpg")
post3 = Post.create(user_id: romy.id, restaurant_id: res4.id, likes: 1, dislikes: 5, rating: 2, review: "Parking is absolutely terrible!! We will NOT be coming back!! Who puts only parallel parking in South Florida??", image: "https://images.squarespace-cdn.com/content/v1/5510c3c8e4b017881a01534f/1538595187968-ZS3OFDUIJBQTZ48XROGP/IMG_1483.jpg?format=2500w")
post4 = Post.create(user_id: cooper.id, restaurant_id: res2.id, likes: 29, dislikes: 5, rating: 0, review: "What used to be a star restaurant has fallen. Patrons can no longer dip their steak into the chocolate fountain. Disappointed guest.", image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/daytonabeach/Golden-Corral-Buffet_08412688-affe-2022-26ec697babe070b7.jpg")
post5 = Post.create(user_id: cooper.id, restaurant_id: res3.id, likes: 1, dislikes: 0, rating: 5, review: "Best sandwiches around. Love the tuna sub.", image: "https://assets3.thrillist.com/v1/image/1735231/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg")
post6 = Post.create(user_id: benny.id, restaurant_id: res1.id, likes: 0, dislikes: 0, rating: 2, review: "Steak tasted like Old Bay.", image: "https://media-cdn.tripadvisor.com/media/photo-s/07/fb/22/aa/red-lobster.jpg")
post7 = Post.create(user_id: cooper.id, restaurant_id: res1.id, likes: 2, dislikes: 14, rating: 4, review: "The 300 shrimp for $3.00 is a great deal!", image: "https://www.chewboom.com/wp-content/uploads/2022/06/Red-Lobster-Launches-New-2022-Seafood-Summerfest-Menu-678x381.jpg")

puts "Finished planting seed data!"


