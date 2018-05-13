class AddNumeroCuentaBancoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :numeroCuentaBanco, :string
  end
end
