class DropAddUrlimagenToCampo < ActiveRecord::Migration[5.1]
  def up
         drop_table :add_urlimagen_to_campos
  end

  def down
  	     raise ActiveRecord::IrreversibleMigration
  end
end
