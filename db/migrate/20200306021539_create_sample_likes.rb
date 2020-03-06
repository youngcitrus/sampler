class CreateSampleLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :sample_likes do |t|
      t.integer :user_id, null: false
      t.integer :sample_id, null: false
      t.timestamps
    end
  end
end
