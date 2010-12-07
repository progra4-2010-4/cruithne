class CreateTabs < ActiveRecord::Migration
  def self.up
    create_table :tabs do |t|
      t.text :title
      t.text :body
      t.boolean :private

      t.timestamps
    end
  end

  def self.down
    drop_table :tabs
  end
end
