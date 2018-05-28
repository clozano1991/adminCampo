class AddImagenTresToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenTres, :string
  end
end
