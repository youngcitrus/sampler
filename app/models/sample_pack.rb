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

    has_many :pack_likes,
        foreign_key: :pack_id,
        class_name: :PackLike

    has_many :liked_users,
        through: :pack_likes,
        source: :user

    has_one_attached :cover_art
    
    has_one_attached :demo

    has_many_attached :files

    def liked_by_user?(user)
        self.liked_users.each do |liked_user|
            return true if user.id == liked_user.id
        end

        return false;
    end

end

