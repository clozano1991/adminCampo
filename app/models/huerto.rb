class Huerto < ApplicationRecord
  belongs_to :campo
  has_many :huerto_aplicaciones, :dependent => :destroy
end
