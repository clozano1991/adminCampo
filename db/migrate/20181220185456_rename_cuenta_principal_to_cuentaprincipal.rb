class RenameCuentaPrincipalToCuentaprincipal < ActiveRecord::Migration[5.1]
  def change
  	rename_column :elemento_contables, :cuentaPrincipal, :cuentaprincipal
  end
end
