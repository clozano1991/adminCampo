class CreateHuertos < ActiveRecord::Migration[5.1]
  def change
    create_table :huertos do |t|
      t.references :campo, foreign_key: true
      t.string :nombre
      t.string :color
      t.text :coordenadas
      t.string :cultivo
      t.text :variedades
      t.text :descripcion

      t.timestamps
    end
  end
end
