ActiveRecord::Schema[7.0].define(version: 2022_06_29_134232) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "posts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "restaurant_id"
    t.integer "likes"
    t.integer "dislikes"
    t.integer "rating"
    t.text "review"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "restaurant_name"
    t.string "category"
    t.integer "total_rating"
    t.string "image"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "profile_picture"
    t.string "profile_bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
