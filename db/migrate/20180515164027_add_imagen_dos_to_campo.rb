class AddImagenDosToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :imagenDos, :string
  end
end
