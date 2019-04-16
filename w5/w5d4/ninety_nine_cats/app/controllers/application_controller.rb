class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in? 
  #question => makes methods available to views

  def login(user)
    session[:session_token] = user.reset_session_token! 
  end

  def logout
    current_user.reset_session_token!  #question => it is safer to call reset on the METHOD because @current_user might not exist. Since every GET request is a new session, the logout request is another
    @current_user = nil 
    session[:session_token] = nil 
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    # session[:session_token] == @current_user.session_token
    !!current_user #Q: @ is not needed?
  end

  def ensure_logged_in 
    redirect_to new_session_url unless logged_in? 
  end

end