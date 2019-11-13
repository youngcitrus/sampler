class AddKeyAndBpmToSamples < ActiveRecord::Migration[5.2]
  def change
    add_column :samples, :key, :string
    add_column :samples, :bpm, :integer
  end
end
