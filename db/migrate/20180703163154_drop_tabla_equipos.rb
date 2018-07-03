class DropTablaEquipos < ActiveRecord::Migration[5.1]
  def change
  	drop_table :equipos
  end
end
