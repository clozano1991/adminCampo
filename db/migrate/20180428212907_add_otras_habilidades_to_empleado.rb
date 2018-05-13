class AddOtrasHabilidadesToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :otrasHabilidades, :string
  end
end
