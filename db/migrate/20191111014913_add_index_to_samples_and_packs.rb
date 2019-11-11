class AddIndexToSamplesAndPacks < ActiveRecord::Migration[5.2]
  def change
    add_index :samples, [:name, :pack_id], unique: true
    add_index :sample_packs, :name, unique: true
  end
end
