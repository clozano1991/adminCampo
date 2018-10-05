class AddPorcentageCotizacionAfpToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :porcentajeCotizacionAFP, :float
  end
end
