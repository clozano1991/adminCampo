class CreatePartidas < ActiveRecord::Migration[5.1]
  def change
    create_table :partida_contables do |t|
      t.references :campo, foreign_key: true
      t.string :nombre
      t.string :cuentaAsociada
      t.string :tipoIngresoEgreso
      t.date :fecha
      t.text :observacion

      t.timestamps
    end
  end
end
