class DropAplicacionHuertos < ActiveRecord::Migration[5.1]
  def change
  	drop_table :aplicacion_huertos
  end
end
