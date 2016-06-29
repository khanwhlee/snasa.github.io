class AddCommandsToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :command1, :string, default: "gc command1"
  	add_column :users, :response1, :string, default: "response1"
  	add_column :users, :command2, :string, default: "gc command2"
  	add_column :users, :response2, :string, default: "response2"
  	add_column :users, :command3, :string, default: "gc command3"
  	add_column :users, :response3, :string, default: "response3"
  	add_column :users, :command4, :string, default: "gc command4"
  	add_column :users, :response4, :string, default: "response4"
  	add_column :users, :command5, :string, default: "gc command5"
  	add_column :users, :response5, :string, default: "response5"
  	add_column :users, :command6, :string, default: "gc command6"
  	add_column :users, :response6, :string, default: "response6"
  	add_column :users, :command7, :string, default: "gc command7"
  	add_column :users, :response7, :string, default: "response7"
  	add_column :users, :command8, :string, default: "gc command8"
  	add_column :users, :response8, :string, default: "response8"
  	add_column :users, :command9, :string, default: "gc command9"
  	add_column :users, :response9, :text, default: "response9"
  	add_column :users, :command10, :string, default: "gc command10"
  	add_column :users, :response10, :text, default: "response10"
  end
end
