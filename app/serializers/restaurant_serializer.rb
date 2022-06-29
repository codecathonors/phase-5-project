class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :category, :total_rating, :image, :location
end
