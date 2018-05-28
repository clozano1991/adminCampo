class AddImagenUnoToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenUno, :string
  end
end
