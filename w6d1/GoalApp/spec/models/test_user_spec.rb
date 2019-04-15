# == Schema Information
#
# Table name: test_users
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }
  let(:bad_user) { User.new(username: 'bad_user', password:'') }

  describe 'validations' do 
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe '::find_by_credentials' do
    it 'should return a user with correct credentials' do 
        expect(User.find_by_credentials(user.username, user.password)).to eq(user)
    end
    
    it 'should return nil with incorrect credentials' do 
      expect(User.find_by_credentials(bad_user.username, bad_user.password)).to be_nil
    end
  end

end
