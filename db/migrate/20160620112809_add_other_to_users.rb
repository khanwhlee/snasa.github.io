class AddOtherToUsers < ActiveRecord::Migration
  def change
    add_column :users, :story, :text
    add_column :users, :mission, :string
    add_column :users, :img, :string
  end
end
