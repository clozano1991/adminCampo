class RemoveComentariosFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :comentarios, :text
  end
end
