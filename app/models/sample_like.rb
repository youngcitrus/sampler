class SampleLike < ApplicationRecord
    validates :user_id, :sample_id, presence: true
    validates_uniqueness_of :user_id, :scope => :sample_id

end
