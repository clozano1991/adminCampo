class ChangeColumnNameColor < ActiveRecord::Migration[5.1]
  def change
  	rename_column :huertos, :color, :clase
  end
end
