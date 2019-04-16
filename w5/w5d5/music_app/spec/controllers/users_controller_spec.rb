require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do 
        post :create, params: { user: {email: "jack_bruce@place.com", password: ""} }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present

        # user = User.new
        # expect(user.valid?).to be false 
      end

      it "validates that the password is at least 6 characters long" do 
        post :create, params: { user: {email: "jack_bruce@place.com", password: "short"} }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present


        # user = User.new(username: "lisa", password: "12345")
        # expect(user.valid?).to be false 
      end
    end

    context "with valid params" do
      it "redirects user to bands index on success" do 
        post :create, params: { user: {email: "jack_bruce@place.com", password: "password"} }
        expect(response).to redirect_to(new_session_url)
        
        #current_path.should == bands_url
      end
    end
  end
end
