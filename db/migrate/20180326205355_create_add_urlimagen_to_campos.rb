class CreateAddUrlimagenToCampos < ActiveRecord::Migration[5.1]
  def change
    create_table :add_urlimagen_to_campos do |t|
      t.text :urlimagen

      t.timestamps
    end
  end
end
