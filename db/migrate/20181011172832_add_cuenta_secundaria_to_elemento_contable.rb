class AddCuentaSecundariaToElementoContable < ActiveRecord::Migration[5.1]
  def change
    add_column :elemento_contables, :cuentaSecundaria, :string
  end
end
