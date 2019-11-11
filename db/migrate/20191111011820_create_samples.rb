class CreateSamples < ActiveRecord::Migration[5.2]
  def change
    create_table :samples do |t|
      t.string :name, null: false
      t.integer :pack_id, null: false
      t.timestamps
    end
  end
end
