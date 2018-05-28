class AddImagenBloqueTresToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenBloqueTres, :text
  end
end
