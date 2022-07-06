class Restaurant < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :restaurant_name, presence: true
    validates :location, presence: true
    validates :category, presence: true
    validates :total_rating, numericality: { in: 0..5 }, allow_nil: true
   

end
