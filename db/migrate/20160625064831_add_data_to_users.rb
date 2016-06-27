class AddDataToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :schedule, :text, default: ""
    add_column :users, :mission, :string, default: ""
    add_column :users, :target, :string, default: "hot girl"
  end
end
