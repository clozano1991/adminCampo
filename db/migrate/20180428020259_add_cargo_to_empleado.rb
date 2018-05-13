class AddCargoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :cargo, :string
  end
end
