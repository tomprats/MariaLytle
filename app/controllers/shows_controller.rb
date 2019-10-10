class ShowsController < ApplicationController
  before_action :authenticate, except: :index

  def index
    shows = Show.all

    render json: {shows: shows}
  end

  def create
    show = Show.new(show_params)

    if show.save
      render json: {success: true, message: "Show created"}
    else
      render json: {success: false, message: show.errors.full_messages.join(", ")}
    end
  end

  def show
    show = Show.find(params[:id])

    render json: {show: show}
  end

  def update
    show = Show.find(params[:id])

    if show.update(show_params)
      render json: {
        success: true,
        message: "Show updated",
        show: show
      }
    else
      render json: {success: false, message: show.errors.full_messages.join(", ")}
    end
  end

  def destroy
    show = Show.find(params[:id])
    show.destroy!

    render json: {success: true, message: "Show deleted"}
  end

  private

  def show_params
    params.require(:show).permit(:date, :venue)
  end
end
