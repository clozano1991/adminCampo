class CreateEquipos < ActiveRecord::Migration[5.1]
  def change
    create_table :equipos do |t|
      t.references :campo, foreign_key: true
      t.string :nombre
      t.string :marca
      t.string :modelo
      t.date :año_fabricacion
      t.date :fecha_adquisicion

      t.timestamps
    end
  end
end
