FactoryBot.define do 
  factory :user do 
    username { Faker::Movies::LordOfTheRings.character }
    password { "andmyaxe!" }
  end
end