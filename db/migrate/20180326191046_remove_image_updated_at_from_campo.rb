class RemoveImageUpdatedAtFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :image_updated_at, :datetime
  end
end
