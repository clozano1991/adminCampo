class AddImagenBloqueUnoToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenBloqueUno, :text
  end
end
