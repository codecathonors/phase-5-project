class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :category, :total_rating, :image, :location

  has_many :posts, serializer: RestaurantPostSerializer
end
