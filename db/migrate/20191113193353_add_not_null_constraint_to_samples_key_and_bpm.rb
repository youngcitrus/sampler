class AddNotNullConstraintToSamplesKeyAndBpm < ActiveRecord::Migration[5.2]
  def change
    change_column_null :samples, :key, false
    change_column_null :samples, :bpm, false
  end
end
