
class ChangePorcentajeCotizacionIsapreToBeFloat < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :porcentajeCotizacionIsapre, "float USING CAST(porcentajeCotizacionIsapre AS float)"
  end
end
