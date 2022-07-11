class PostSerializer < ActiveModel::Serializer
  attributes :id, :likes, :dislikes, :rating, :review, :image, :short_review

  belongs_to :restaurant, serializer: PostRestaurantSerializer
  belongs_to :user, serializer: PostUserSerializer

  def short_review
    "#{self.object.review[0..50]} . . ."
  end
end
