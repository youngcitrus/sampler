class CreatePackLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :pack_likes do |t|
      t.integer :user_id, null: false
      t.integer :pack_id, null: false

      t.timestamps
    end
  end
end
