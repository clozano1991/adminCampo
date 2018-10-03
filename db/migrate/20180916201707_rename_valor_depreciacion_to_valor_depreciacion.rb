class RenameValorDepreciacionToValorDepreciacion < ActiveRecord::Migration[5.1]
  def change
  	rename_column :depreciaciones, :ValorDepreciacion, :valorDepreciacion
  end
end



