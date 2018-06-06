class AddDescripcionToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :descripcion, :text
  end
end
