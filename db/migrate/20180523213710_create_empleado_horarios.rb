class CreateEmpleadoHorarios < ActiveRecord::Migration[5.1]
  def change
    create_table :empleado_horarios do |t|
      t.references :empleado, foreign_key: true

      t.timestamps
    end
  end
end
