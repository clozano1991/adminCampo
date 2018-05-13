class AddManejoTecnologiaToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :manejoTecnologia, :string
  end
end
