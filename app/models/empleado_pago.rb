class EmpleadoPago < ApplicationRecord
  belongs_to :empleado
  has_many :pago_items, :dependent => :destroy
  accepts_nested_attributes_for :pago_items, allow_destroy: true
end
 