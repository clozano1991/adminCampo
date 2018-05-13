class AddBloqueMapaFromHuerto < ActiveRecord::Migration[5.1]
  def change
    add_column :huertos, :bloqueMapa, :string
  end
end
