class RemoveApellidoMaternoFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :apellidoMaterno, :string
  end
end
