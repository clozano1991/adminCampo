class AddAttachmentImageToCampos < ActiveRecord::Migration[5.0]
  def self.up
    change_table :campos do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :campos, :image
  end
end
