class AddEmpleadoToPagosEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_reference :pagos_empleados, :empleado, foreign_key: true
  end
end
