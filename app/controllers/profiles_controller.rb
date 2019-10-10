class ProfilesController < ApplicationController
  before_action :authenticate, except: :show

  def show
    render json: {user: current_user&.as_json(except: :password_digest)}
  end

  def update
    if current_user.update(user_params)
      render json: {success: true, message: "Profile updated", user: current_user}
    else
      render json: {success: false, message: @user.errors.full_messages.join(", ")}
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :admin, :email, :first_name, :last_name,
      :password, :password_confirmation
    )
  end
end
