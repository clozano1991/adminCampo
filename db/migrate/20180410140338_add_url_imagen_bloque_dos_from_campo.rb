class AddUrlImagenBloqueDosFromCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :urlImagenBloqueDos, :text
  end
end
