class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.money :price_cents
      t.string :image_url

      t.timestamps
    end
  end
end
