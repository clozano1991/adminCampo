class RemoveTipoTrabajadorFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :tipoTrabajador, :string
  end
end
