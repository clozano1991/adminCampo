class ChangeMontoToBeBigintInElementoContables < ActiveRecord::Migration[5.1]
  def change
  	change_column :elemento_contables, :monto, :bigint
  end
end
