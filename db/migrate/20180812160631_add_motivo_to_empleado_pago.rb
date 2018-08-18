class AddMotivoToEmpleadoPago < ActiveRecord::Migration[5.1]
  def change
    add_column :empleado_pagos, :motivo, :string
  end
end
