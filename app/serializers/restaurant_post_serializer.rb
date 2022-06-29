class RestaurantPostSerializer < ActiveModel::Serializer
  attributes :rating, :user_rating

  def user_rating
    "#{self.object.user.username} rated #{self.object.restaurant.restaurant_name}."
  end
end
