class DeletePartidaContable < ActiveRecord::Migration[5.1]
  def change
  	drop_table :partida_contable
  end
end
