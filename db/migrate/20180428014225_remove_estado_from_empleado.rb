class RemoveEstadoFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :estado, :string
  end
end
