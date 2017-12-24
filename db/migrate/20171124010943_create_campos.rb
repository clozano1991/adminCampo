class CreateCampos < ActiveRecord::Migration[5.1]
  def change
    create_table :campos do |t|
      t.string :nombre
      t.string :propietario
      t.string :direccion
      t.text :comentarios
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
