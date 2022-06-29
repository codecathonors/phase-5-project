class RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find_by!(id: params[:id])
        render json: restaurant, status: :ok
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    def update
        restaurant = Restaurant.find_by!(id: params[:id])
        restaurant.update!(restaurant_params)
        render json: restaurant, status: :accepted
    end

    private

    def restaurant_params
        params.permit(:restaurant_name, :category, :image, :total_rating, :location)
    end

    def render_not_found
        render json: { error: "Restaurant not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end

end
