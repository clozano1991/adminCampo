class AddPorcentajeCotizacionAfpToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :porcentajeCotizacionAFP, :string
  end
end
