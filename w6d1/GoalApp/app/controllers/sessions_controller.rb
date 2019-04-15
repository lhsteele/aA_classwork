class SessionsController < ApplicationController 
  def new

  end

  def create 
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user 
      log_in!(user)
      redirect_to goals_url 
    else 
      render :new
    end
  end

  def destroy 
    log_out!
    render :new
  end
end