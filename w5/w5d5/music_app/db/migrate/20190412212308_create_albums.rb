class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.integer :year, null: false
      t.boolean :studio, null: false, default: true 
      t.integer :band_id

      t.timestamps
    end
    add_foreign_key :albums, :bands, column: :band_id, primary_key: :id 
  end
end
