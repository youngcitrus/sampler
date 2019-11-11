class CreateSamplePacks < ActiveRecord::Migration[5.2]
  def change
    create_table :sample_packs do |t|
      t.string :name, null: false
      t.text :description
      t.timestamps
    end
  end
end
