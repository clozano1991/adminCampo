class RemoveImageFileSizeFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :image_file_size, :integer
  end
end
