class ChangeValorToBeFloatInPagoItems < ActiveRecord::Migration[5.1]
  def change
  	change_column :pago_items, :valor, :float
  end
end
