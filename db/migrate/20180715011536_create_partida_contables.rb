class CreatePartidaContables < ActiveRecord::Migration[5.1]
  def change
    create_table :partida_contables do |t|
      t.references :campo, foreign_key: true
      t.string :tipo
      t.date :fecha
      t.string :subTipo
      t.integer :monto
      t.text :observacion

      t.timestamps
    end
  end
end
