
class ChangePorcentajeCotizacionIsapreToBeDouble < ActiveRecord::Migration[5.1]
  def change
  	change_column :empleados, :porcentajeCotizacionIsapre, :float
  end
end
