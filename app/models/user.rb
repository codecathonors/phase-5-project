class User < ApplicationRecord
    has_many :posts
    has_many :restaurants, through: :posts

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { in: 3..25}
    validates :username, format: { with: /\A[a-z0-9A-Z ]+\z/, message: "can only be letters and numbers, no unique symbols." }
    validates :password_digest, presence: true
    validates :password_digest, length: { in: 6..20 }
    validates :password_digest, confirmation: true
    validates :profile_bio, length: { maximum: 200 }, allow_blank: true
end
