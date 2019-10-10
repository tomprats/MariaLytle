class SessionsController < ApplicationController
  def create
    email = params.fetch(:user, {})[:email] || ""
    user = User.find_by(email: email.strip.downcase)

    if user && user.password_digest && user.authenticate(params[:user][:password])
      session[:current_user_id] = user.id

      render json: {success: true, user: current_user}
    else
      render json: {success: false}
    end
  end

  def destroy
    session[:current_user_id] = nil

    render json: {success: true}
  end
end
