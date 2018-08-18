class AddFormaDePagoToEmpleadoPago < ActiveRecord::Migration[5.1]
  def change
    add_column :empleado_pagos, :formaDePago, :string
  end
end
