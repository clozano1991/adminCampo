class AddSueldoBaseMensualToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :sueldoBaseMensual, :string
  end
end
