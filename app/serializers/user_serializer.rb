class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_picture, :profile_bio
end
