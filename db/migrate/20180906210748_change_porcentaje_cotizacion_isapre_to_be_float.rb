
class ChangePorcentajeCotizacionIsapreToBeFloat < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :porcentajeCotizacionIsapre, :float, using: "porcentajeCotizacionIsapre::float"
  end
end
