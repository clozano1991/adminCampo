class AddUrlImagenBloqueUnoFromCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :urlImagenBloqueUno, :text
  end
end
