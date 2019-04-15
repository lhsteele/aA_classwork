class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.boolean :public, null: false, default: true
      t.timestamps
    end
    add_foreign_key :goals, :users, foreign_key: :user_id, primary_key: :id
  end
end
