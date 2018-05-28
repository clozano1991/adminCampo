class CreatePagosEmpleados < ActiveRecord::Migration[5.1]
  def change
    create_table :pagos_empleados do |t|
      t.date :fecha

      t.timestamps
    end
  end
end
