class CreateTabs < ActiveRecord::Migration
  def self.up
    create_table :tabs do |t|
      t.text :title
      t.text :body
      t.boolean :private
      t.integer :user_id
      t.timestamps
    end
  end

  def self.down
    drop_table :tabs
  end
end
