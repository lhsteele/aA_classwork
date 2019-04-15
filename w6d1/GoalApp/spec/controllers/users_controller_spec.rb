require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  let(:user) { create(:user) }

  describe 'GET #new' do
    it 'should render the new template' do
      allow(subject).to receive(:logged_in?).and_return(true)
      get :new
      expect(response).to render_template(:new)
    end
  end

  let(:valid_params) {{ user: { username: "Lisa", password: "password" }}}
  let(:invalid_params) {{ user: { username: "Gordy", password: " " }}}

  describe 'POST #create' do
    context 'with valid params' do
      it 'should save a user to the database' do
        post :create, params: valid_params
        expect( User.find_by(username: user.username) ).to eq(user)
      end

      it 'should redirect to goals index' do
        post :create, params: valid_params 
        expect(response).to redirect_to(goals_url)
      end
    end

    context 'with invalid params' do 
      it 'should store errors' do 
        post :create, params: invalid_params 
        expect(flash[:errors]).to be_present
      end

      it 'should render new user template' do 
        post :create, params: invalid_params 
        expect(response).to render_template(:new)
      end
    end
  end

end
