class CreateEmpleadoInasistencia < ActiveRecord::Migration[5.1]
  def change
    create_table :empleado_inasistencia do |t|
      t.references :empleado, foreign_key: true

      t.timestamps
    end
  end
end
