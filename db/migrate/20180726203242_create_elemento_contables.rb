class CreateElementoContables < ActiveRecord::Migration[5.1]
  def change
    create_table :elemento_contables do |t|
      t.references :campo, foreign_key: true
      t.string :tipo
      t.string :nombre
      t.string :tipoIngresoEgreso
      t.integer :monto
      t.date :fecha
      t.text :observacion

      t.timestamps
    end
  end
end
