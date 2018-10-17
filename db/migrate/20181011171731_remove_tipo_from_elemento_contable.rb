class RemoveTipoFromElementoContable < ActiveRecord::Migration[5.1]
  def change
    remove_column :elemento_contables, :tipo, :string
  end
end
