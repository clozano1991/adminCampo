class AddSueldoBaseMensuallToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :sueldoBaseMensual, :float
  end
end
