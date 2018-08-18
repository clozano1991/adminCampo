class AddHaberDescuentoExtraToPagoItem < ActiveRecord::Migration[5.1]
  def change
    add_column :pago_items, :haberDescuentoExtra, :string
  end
end
