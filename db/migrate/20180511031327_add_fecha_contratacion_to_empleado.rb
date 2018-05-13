class AddFechaContratacionToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :fechaContratacion, :date
  end
end
