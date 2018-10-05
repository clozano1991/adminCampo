class AddPorcentageCotizacionIsapreeToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :porcentajeCotizacionIsapre, :float
  end
end
