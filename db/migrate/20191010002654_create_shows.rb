class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.date :date, null: false
      t.string :venue, null: false
      t.timestamps
    end
  end
end
