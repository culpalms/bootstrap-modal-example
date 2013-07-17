class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.text :comment
      t.string :tag

      t.timestamps
    end
  end
end
