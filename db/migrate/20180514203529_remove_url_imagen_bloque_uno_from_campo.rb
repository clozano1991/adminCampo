class RemoveUrlImagenBloqueUnoFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :urlImagenBloqueUno, :text
  end
end
