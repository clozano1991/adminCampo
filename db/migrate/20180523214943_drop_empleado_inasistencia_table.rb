class DropEmpleadoInasistenciaTable < ActiveRecord::Migration[5.1]
  def change
  	drop_table :empleado_inasistencia
  end
end
