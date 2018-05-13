class AddResumenCargoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :resumenCargo, :text
  end
end
