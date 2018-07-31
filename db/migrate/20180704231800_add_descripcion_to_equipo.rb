class AddDescripcionToEquipo < ActiveRecord::Migration[5.1]
  def change
    add_column :equipos, :descripcion, :text
  end
end
