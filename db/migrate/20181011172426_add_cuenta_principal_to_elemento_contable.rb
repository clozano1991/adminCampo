class AddCuentaPrincipalToElementoContable < ActiveRecord::Migration[5.1]
  def change
    add_column :elemento_contables, :cuentaPrincipal, :string
  end
end
