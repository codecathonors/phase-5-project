class Post < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates :user_id, presence: true
    validates :restaurant_id, presence: true
    validates :rating, numericality: { in: 0..5 }
 
end
