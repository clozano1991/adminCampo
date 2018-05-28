class RemoveImagenBloqueDosFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :imagenBloqueDos, :text
  end
end
