class RemoveApellidoPaternoFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :apellidoPaterno, :string
  end
end
