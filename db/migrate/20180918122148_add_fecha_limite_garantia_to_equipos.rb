class AddFechaLimiteGarantiaToEquipos < ActiveRecord::Migration[5.1]
  def change
    add_column :equipos, :fechaLimiteGarantia, :date
  end
end
