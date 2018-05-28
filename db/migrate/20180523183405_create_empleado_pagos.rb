class CreateEmpleadoPagos < ActiveRecord::Migration[5.1]
  def change
    create_table :empleado_pagos do |t|
      t.date :fecha
      t.references :empleado, foreign_key: true

      t.timestamps
    end
  end
end
