class AddTipoCuentaBancoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :tipoCuentaBanco, :string
  end
end
