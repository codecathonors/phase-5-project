class User < ApplicationRecord
    has_many :posts
    has_many :restaurants, through: :posts
    has_one :profile
end
