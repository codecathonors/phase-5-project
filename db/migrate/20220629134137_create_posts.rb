class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.integer :likes
      t.integer :dislikes
      t.integer :rating
      t.text :review
      t.string :image

      t.timestamps
    end
  end
end
