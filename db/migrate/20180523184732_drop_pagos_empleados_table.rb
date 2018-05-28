class DropPagosEmpleadosTable < ActiveRecord::Migration[5.1]
  def change
  	drop_table :pagos_empleados
  end
end
