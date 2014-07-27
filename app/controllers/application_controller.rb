require "google/api_client"

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def google
    Google::APIClient.new(
      application_name: "MariaLytle",
      application_version: "1.0.0",
      key: ENV["GOOGLE_KEY"],
      authorization: nil
    )
  end
  helper_method :google

  def youtube
    google.discovered_api("youtube", "v3")
  end
  helper_method :youtube

  def facebook
    unless session[:facebook_token]
      oauth = Koala::Facebook::OAuth.new(ENV["FACEBOOK_ID"], ENV["FACEBOOK_SECRET"])
      session[:facebook_token] = oauth.get_app_access_token
    end

    Koala::Facebook::API.new(session[:facebook_token])
  end
  helper_method :facebook
end
