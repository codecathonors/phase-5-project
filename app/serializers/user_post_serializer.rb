class UserPostSerializer < ActiveModel::Serializer
  attributes :restaurant_review, :short_review, :rating, :likes, :dislikes

  def short_review
    "#{self.object.review[0..15]} . . ."
  end

  def restaurant_review
    "#{self.object.user.username} reviewed #{self.object.restaurant.restaurant_name}"
  end

end
