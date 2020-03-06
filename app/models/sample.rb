# == Schema Information
#
# Table name: samples
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  pack_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  key        :string           not null
#  bpm        :string           not null
#

class Sample < ApplicationRecord
    validates :name, :pack_id, :key, :bpm, presence: true
    validates :name, uniqueness: {scope: :pack_id}

    belongs_to :sample_pack,
        foreign_key: :pack_id,
        class_name: :SamplePack

    has_one_attached :file

    has_many :sample_likes,
        foreign_key: :sample_id,
        class_name: :SampleLike

    has_many :liked_users,
        through: :sample_likes,
        source: :user

end
