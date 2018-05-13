class AddNivelEducacionToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :nivelEducacion, :string
  end
end
