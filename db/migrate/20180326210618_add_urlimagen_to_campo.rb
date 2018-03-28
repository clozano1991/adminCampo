class AddUrlimagenToCampo < ActiveRecord::Migration[5.1]
  def change
    add_column :campos, :urlimagen, :text
  end
end
