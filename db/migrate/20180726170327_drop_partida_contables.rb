class DropPartidaContables < ActiveRecord::Migration[5.1]
  def change
  	drop_table :partida_contables
  end
end
