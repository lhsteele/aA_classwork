# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  studio     :boolean          default(TRUE), not null
#  band_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :year, :studio, presence: true

  belongs_to :band,
    foreign_key: :band_id, 
    class_name: :Band
end
