class RemovePorcentajeCotizacionIsapreFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :porcentajeCotizacionIsapre, :string
  end
end
