class AddResumenPersonaToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :resumenPersona, :text
  end
end
