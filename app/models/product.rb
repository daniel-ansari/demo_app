class Product < ApplicationRecord
  monetize :price_cents, numericality: { greater_than: 0 }

  validates :title, presence: true
  validates :image_url, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])
end
