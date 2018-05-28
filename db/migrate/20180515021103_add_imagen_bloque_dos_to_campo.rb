class AddImagenBloqueDosToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenBloqueDos, :text
  end
end
