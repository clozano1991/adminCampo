class AddUrlImagenBloqueTresFromCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :urlImagenBloqueTres, :text
  end
end
