class RemoveUrlImagenBloqueDosFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :urlImagenBloqueDos, :text
  end
end
