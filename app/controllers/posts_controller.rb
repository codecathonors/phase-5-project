class PostsController < ApplicationController
    # skip_before_action :authorize
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = Post.find_by!(id: params[:id])
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find_by!(id: params[:id])
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post = Post.find_by!(id: params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:likes, :dislikes, :rating, :review, :image, :user_id, :restaurant_id, :restaurant)
    end

    def render_not_found
        render json: { error: "Post not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end
end
