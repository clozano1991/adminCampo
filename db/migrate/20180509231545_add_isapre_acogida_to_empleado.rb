class AddIsapreAcogidaToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :isapreAcogida, :string
  end
end
