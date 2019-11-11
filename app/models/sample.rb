# == Schema Information
#
# Table name: samples
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  pack_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sample < ApplicationRecord
    validates :name, :pack_id, presence: true
    validates :name, uniqueness: {scope: :pack_id}

    belongs_to :sample_pack,
        foreign_key: :pack_id,
        class_name: :SamplePack

    has_one_attached :file
end
