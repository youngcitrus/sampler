class SampleLike < ApplicationRecord
    validates :user_id, :sample_id, presence: true
    validates_uniqueness_of :user_id, :scope => :sample_id

    belongs_to :sample,
        foreign_key: :sample_id,
        class_name: :Sample

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
