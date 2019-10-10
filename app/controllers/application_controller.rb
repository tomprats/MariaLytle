class ApplicationController < ActionController::Base
  def authenticate
    return if current_user

    if request.format.json?
      render(json: {}, status: :unauthorized)
    else
      render(html: "", status: :unauthorized, layout: "application")
    end
  end

  def current_user
    @current_user = User.find_by(id: session[:current_user_id])
  end

  def not_found
    raise ActionController::RoutingError.new("Not Found")
  end
end
