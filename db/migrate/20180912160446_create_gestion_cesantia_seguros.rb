class CreateGestionCesantiaSeguros < ActiveRecord::Migration[5.1]
  def change
    create_table :gestion_cesantia_seguros do |t|
      t.string :tipoContrato
      t.float :porcentajeAportadoEmpresa
      t.float :porcentageAportadoEmpleado
      t.references :campo, foreign_key: true

      t.timestamps
    end
  end
end
