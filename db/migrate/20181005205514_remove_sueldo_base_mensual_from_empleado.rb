class RemoveSueldoBaseMensualFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :sueldoBaseMensual, :string
  end
end
