# == Schema Information
#
# Table name: sample_packs
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SamplePack < ApplicationRecord
    validates :name, :description, presence: true
    validates :name, uniqueness: true

    has_many :samples,
        foreign_key: :pack_id,
        class_name: :Sample

    has_one_attached :cover_art
    
    has_one_attached :demo

end
