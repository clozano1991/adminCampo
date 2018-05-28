class CambiandoTiposColumnasEmpleado < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :manejoTecnologia, :text
  	change_column :empleados, :otrasHabilidades, :text
  end
end
