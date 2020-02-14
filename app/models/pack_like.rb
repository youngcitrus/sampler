class PackLike < ApplicationRecord
    validates :user_id, :pack_id, presence: true
    validates_uniqueness_of :user_id, :scope => :pack_id

    belongs_to :sample_pack,
        foreign_key: :pack_id,
        class_name: :SamplePack

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
