class AddApellidosToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :apellidos, :string
  end
end
