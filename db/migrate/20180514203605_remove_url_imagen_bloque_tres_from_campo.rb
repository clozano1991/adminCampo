class RemoveUrlImagenBloqueTresFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :urlImagenBloqueTres, :text
  end
end
