require 'rails_helper'

RSpec.describe User do 
  subject { User.new(email: "jonathan@fakesite.com", password: "good_password")}
  end


  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password, minimum: 6) }

  describe "#is_password?" do 
    it "checks if user password is correct" do
      expect(user.is_password?("good_password")).to be true
    end

    it "checks if user password is not correct" do
      expect(user.is_password?("bad_password")).to be false
    end
  end

  describe "#reset_session_token" do 
    it "sets a new session token" do 
      user.valid?
      old_session_token = user.session_token 
      user.reset_session_token!
    end
  end

  describe ".find_by_credentials" do 
    before { user.save! }
    it "returns a user given good credentials" do 
      expect(User.find_by_credentials("jonathan@fakesite.com", "good_password")).to eq(user)
    end

    it "returns nil given bad credentials" do 
      expect(User.find_by_credentials("jonathan@fakesite.com", "bad_password")).to eq(nil)
    end
  end

end
