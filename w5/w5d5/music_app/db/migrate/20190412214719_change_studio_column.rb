class ChangeStudioColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:albums, :studio, 'studio')
  end
end
