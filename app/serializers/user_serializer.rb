class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_picture, :profile_bio

  has_many :posts, serializer: UserPostSerializer
end
