

class Campo < ApplicationRecord
  belongs_to :user
  has_many :huertos, :dependent => :destroy
  has_many :empleados, :dependent => :destroy



 
end
