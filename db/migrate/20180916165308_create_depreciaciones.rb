class CreateDepreciaciones < ActiveRecord::Migration[5.1]
  def change
    create_table :depreciaciones do |t|
      t.date :fecha
      t.float :ValorDepreciacion
      t.references :equipo, foreign_key: true

      t.timestamps
    end
  end
end
