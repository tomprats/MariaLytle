class UsersController < ApplicationController
  before_action :authenticate

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {success: true, message: "#{@user.first_name} created"}
    else
      render json: {success: false, message: @user.errors.full_messages.join(", ")}
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: {success: true, message: "#{@user.first_name} updated"}
    else
      render json: {success: false, message: @user.errors.full_messages.join(", ")}
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.tom?
      render json: {success: false, message: "You can't delete the creator"}
    else
      @user.destroy!
      render json: {success: true, message: "#{@user.first_name} deleted"}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name)
  end
end
