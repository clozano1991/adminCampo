class Empleado < ApplicationRecord
	has_many :empleado_pagos, :dependent => :destroy
	has_many :empleado_abandonos, :dependent => :destroy
	has_many :empleado_observaciones, :dependent => :destroy
	has_many :empleado_horarios, :dependent => :destroy
	belongs_to :campo
end
