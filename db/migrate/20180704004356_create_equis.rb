class CreateEquis < ActiveRecord::Migration[5.1]
  def change
    create_table :equipos do |t|
      t.references :campo, foreign_key: true
      t.string :tipoEquipo
      t.string :marca
      t.string :modelo
      t.date :fechaFabricacion
      t.date :fechaAdquisicion
      t.string :estado
      t.string :patente
      t.string :compradoAVendedor

      t.timestamps
    end
  end
end
