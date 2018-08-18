class CreatePagoItems < ActiveRecord::Migration[5.1]
  def change
    create_table :pago_items do |t|
      t.references :empleado_pago, foreign_key: true
      t.string :item
      t.integer :cantidad
      t.integer :valor

      t.timestamps
    end
  end
end
