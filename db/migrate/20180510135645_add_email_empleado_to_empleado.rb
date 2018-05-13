class AddEmailEmpleadoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :emailEmpleado, :string
  end
end
