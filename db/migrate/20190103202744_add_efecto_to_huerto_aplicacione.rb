class AddEfectoToHuertoAplicacione < ActiveRecord::Migration[5.1]
  def change
    add_column :huerto_aplicaciones, :efecto, :string
  end
end
