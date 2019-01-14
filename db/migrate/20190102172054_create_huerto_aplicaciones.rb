class CreateHuertoAplicaciones < ActiveRecord::Migration[5.1]
  def change
    create_table :huerto_aplicaciones do |t|
      t.references :huerto, foreign_key: true
      t.date :fechaaplicacion
      t.string :productocomercial
      t.string :ingredienteactivo
      t.string :dosis
      t.string :personalacargo
      t.string :recomendadopor
      t.text :efectoesperado
      t.text :observacion

      t.timestamps
    end
  end
end
