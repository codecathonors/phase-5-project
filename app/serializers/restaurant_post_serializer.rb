class RestaurantPostSerializer < ActiveModel::Serializer
  # skip_before_action :authorize
  attributes :rating, :user_rating
  # belongs_to :restaurant
  belongs_to :post

  def user_rating
    "#{self.object.user.username} rated #{self.object.restaurant.restaurant_name}."
  end
end
