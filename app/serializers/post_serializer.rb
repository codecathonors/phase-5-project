class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :likes, :dislikes, :rating, :review, :image
end
