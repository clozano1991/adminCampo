

class Campo < ApplicationRecord
  belongs_to :user
  has_many :huertos, :dependent => :destroy
  has_many :empleados, :dependent => :destroy
  has_many :equipos, :dependent => :destroy
  has_many :elemento_contables, :dependent => :destroy
  
  has_many :gestion_cesantia_seguros, :dependent => :destroy
  accepts_nested_attributes_for :gestion_cesantia_seguros, allow_destroy: true




 
end
