class AddFechaDesvinculacionToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :fechaDesvinculacion, :date
  end
end
