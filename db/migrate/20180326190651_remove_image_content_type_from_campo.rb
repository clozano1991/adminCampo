class RemoveImageContentTypeFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :image_content_type, :string
  end
end
