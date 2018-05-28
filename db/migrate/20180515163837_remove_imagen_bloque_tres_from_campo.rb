class RemoveImagenBloqueTresFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :imagenBloqueTres, :text
  end
end
