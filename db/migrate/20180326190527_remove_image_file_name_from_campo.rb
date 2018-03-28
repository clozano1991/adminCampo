class RemoveImageFileNameFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :image_file_name, :string
  end
end
