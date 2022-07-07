class UsersController < ApplicationController
skip_before_action :authorize, only: :create
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        # user = User.find_by!(id: params[:id])
        # render json: user, status: :ok
        render json: @current_user
        # if current_user
        #     render json: @current_user, status: :ok
        # else
        #     render json: "Not authenticated", status: :unauthorized
        # end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find_by!(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find_by!(id: params[:id])
        user.destroy!
        head :no_content
    end

    private

    def user_params
        # params.permit(:username, :password_digest, :password_confirmation, :profile_bio, :profile_picture)
        params.permit(:username, :password, :password_confirmation, :profile_bio, :profile_picture)
    end

    def render_not_found
        render json: { error: "User not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }
    end
end
