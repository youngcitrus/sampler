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

require 'test_helper'

class SampleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
