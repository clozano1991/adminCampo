class AddBancoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :banco, :string
  end
end
