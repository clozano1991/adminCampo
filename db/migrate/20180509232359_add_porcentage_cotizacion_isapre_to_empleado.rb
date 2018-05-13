class AddPorcentageCotizacionIsapreToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :porcentajeCotizacionIsapre, :string
  end
end
