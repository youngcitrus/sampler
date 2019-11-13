class ChangeBpmBackToString < ActiveRecord::Migration[5.2]
  def change
    change_column :samples, :bpm, :string
  end
end
