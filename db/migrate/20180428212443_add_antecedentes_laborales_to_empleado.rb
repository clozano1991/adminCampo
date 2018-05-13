class AddAntecedentesLaboralesToEmpleado < ActiveRecord::Migration[5.1]
  def change
    add_column :empleados, :antecedentesLaborales, :text
  end
end
