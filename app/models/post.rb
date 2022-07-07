class Post < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates :user_id, presence: true
    validates :restaurant_id, presence: true
    validates :rating, numericality: { in: 0..5 }
    validates :likes, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true
    validates :dislikes, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true

   
 
end
