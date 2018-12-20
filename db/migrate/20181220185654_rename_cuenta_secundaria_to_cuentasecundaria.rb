class RenameCuentaSecundariaToCuentasecundaria < ActiveRecord::Migration[5.1]
  def change
  	rename_column :elemento_contables, :cuentaSecundaria, :cuentasecundaria
  end
end
