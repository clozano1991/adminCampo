class RemoveUrlimagenFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :urlimagen, :text
  end
end
