class ChangePorcentajeCotizacionAfpToBeFloatInEmpleados < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :porcentajeCotizacionAFP, :float
  end
end
