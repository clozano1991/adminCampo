class RemoveSueldoBaseFromEmpleado < ActiveRecord::Migration[5.1]
  def change
    remove_column :empleados, :sueldoBase, :integer
  end
end
