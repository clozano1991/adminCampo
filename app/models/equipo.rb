class Equipo < ApplicationRecord
  belongs_to :campo
  has_many :depreciaciones, :dependent => :destroy
end
