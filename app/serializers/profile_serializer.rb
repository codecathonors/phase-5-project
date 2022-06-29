class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :profile_picture, :profile_bio
end
