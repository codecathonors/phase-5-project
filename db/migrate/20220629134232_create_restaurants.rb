class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :restaurant_name
      t.string :category
      t.integer :total_rating
      t.string :image
      t.string :location

      t.timestamps
    end
  end
end
