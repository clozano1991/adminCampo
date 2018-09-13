class ChangeSueldoBaseMensualToBeFloatInEmpleados < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :sueldoBaseMensual, :float
  end
end
