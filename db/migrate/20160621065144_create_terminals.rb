class CreateTerminals < ActiveRecord::Migration
  def change
    create_table :terminals do |t|
    	t.string :terminalinput
    	t.string :terminaloutput 
      t.timestamps
    end
  end
end
