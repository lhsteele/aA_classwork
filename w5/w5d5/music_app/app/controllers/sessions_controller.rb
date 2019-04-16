

class SessionsController < ApplicationController 
  def new 
    render :new 
  end
  
  def create 
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])
    
    if user.nil?
      flash.now[:errors] = ["Incorrect credentials"]
      render :new 
    else
      log_in_user!(user)
      #I think this will need to change to the 'main' page
      #redirect_to users_url
      redirect_to sessions_url
    end
  end

  
  def destroy
    logout
    redirect_to new_session_url
  end
end