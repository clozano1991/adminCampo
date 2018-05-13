class CreateEmpleados < ActiveRecord::Migration[5.1]
  def change
    create_table :empleados do |t|
      t.string :nombre
      t.string :apellidoPaterno
      t.string :apellidoMaterno
      t.string :direccion
      t.string :telefonoContacto
      t.string :telefonoEmergencia
      t.string :estado
      t.string :tipoTrabajador
      t.integer :sueldoBase
      t.string :afpAcogida
      t.references :campo

      t.timestamps
    end
  end
end
