class PostSerializer < ActiveModel::Serializer
  attributes :id, :likes, :dislikes, :rating, :review, :image

  belongs_to :restaurant, serializer: PostRestaurantSerializer
  belongs_to :user, serializer: PostUserSerializer
end
