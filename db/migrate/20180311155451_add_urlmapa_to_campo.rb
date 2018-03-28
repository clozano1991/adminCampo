class AddUrlmapaToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :urlmapa, :text
  end
end
