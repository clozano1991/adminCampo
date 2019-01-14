class RemoveEfectoesperadoFromHuertoAplicacine < ActiveRecord::Migration[5.1]
  def change
    remove_column :huerto_aplicaciones, :efectoesperado, :text
  end
end
