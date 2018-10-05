
class ChangePorcentajeCotizacionIsapreToBeFloat < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :porcentajeCotizacionIsapre, using: "porcentajeCotizacionIsapre::float"
  end
end
