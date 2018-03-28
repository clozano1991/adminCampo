class RemoveUrlmapaFromCampo < ActiveRecord::Migration[5.1]
  def change
    remove_column :campos, :urlmapa, :text
  end
end
