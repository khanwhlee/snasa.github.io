class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
    	t.string :terminalinput
    	t.text :terminaloutput
      t.timestamps
    end
  end
end
