class AddTipoContratoToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :tipoContrato, :string
  end
end
