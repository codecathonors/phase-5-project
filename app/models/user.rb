class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :restaurants, through: :posts



    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { in: 3..25}
    validates :username, format: { with: /\A[a-z0-9A-Z ]+\z/, message: "can only contain letters and numbers, no unique symbols." }
    validates :password, presence: true
    validates :password, length: { in: 6..20 }
    # validates :password_digest, confirmation: true
    validates :profile_bio, length: { maximum: 200 }, allow_blank: true
    # validate :unpermitted_username

    def unpermitted_username
        unless username.starts_with?(/\A[a-zA-Z ]+\z/)
            errors.add(:unpermitted_username, ": Oops! We only allow usernames to start with letters.")
        end
    end
end
