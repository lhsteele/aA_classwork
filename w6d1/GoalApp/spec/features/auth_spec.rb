require 'spec_helper'
require 'rails_helper'


feature 'the signup process' do
  
  scenario 'has a new user page' do
    visit(new_user_url)
    expect(page).to have_content('Sign Up')
  end

  feature 'signing up a user' do

    before(:each) do 
      visit new_user_url
      fill_in "username", with: "Lisa"
      fill_in "password", with: "password"
      click_button("Sign Up")
    end
    
    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content("Lisa")
    end

  end
end

feature 'logging in' do
  before(:each) do 
    User.create(username: "Lisa", password: "password")
    visit new_session_url
    fill_in "username", with: "Lisa"
    fill_in "password", with: "password"
    click_button("Log In")
  end

  scenario 'shows username on the homepage after login' do
    expect(page).to have_content("Lisa")
  end
end

feature 'logging out' do

  scenario 'begins with a logged out state' do 
    visit new_session_url
    user = User.create(username: "Lisa", password: "password")

    expect(user.session_token).to_not eq(session[:session_token]) 
  end

  scenario 'doesn\'t show username on the homepage after logout'

end