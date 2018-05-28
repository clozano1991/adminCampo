class RemoveImagenBloqueUnoFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :imagenBloqueUno, :text
  end
end
