class RestaurantPostSerializer < ActiveModel::Serializer
  attributes :rating, :user_rating
  # belongs_to :restaurant
  belongs_to :post

  def user_rating
    "#{self.object.user.username} rated #{self.object.restaurant.restaurant_name}."
  end
end
