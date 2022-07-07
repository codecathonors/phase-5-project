class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :profile_bio

  has_many :posts, serializer: UserPostSerializer
end
