class SampleLike < ApplicationRecord
    validates :user_id, :pack_id, presence: true
    validates_uniqueness_of :user_id, :scope => :pack_id
    
end
