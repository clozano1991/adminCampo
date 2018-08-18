class EmpleadoPagosController < ApplicationController
	before_action :authenticate_user!
    
	def index
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleado_pagos=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.all
	end

	def show
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
	end

	def new
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleado_pago=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.build

		#parte donde se crean los items del pago que estan pre definidos
		@sueldoBase=@empleado_pago.pago_items.build
	end 

	def create
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleado_pago=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.build(empleado_pago_params)
		@empleado_pago.save
		respond_to do|format|
			format.html {redirect_to user_campo_empleado_empleado_pagos_path(current_user, @campo, @empleado)}
			format.js 
		end	
	end

	def edit
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleado_pago=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.find(params[:id])
	end
	
	def update
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleado_pago=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.find(params[:id])
		@empleado.update(empleado_params)
		respond_to do|format|
			format.html {redirect_to user_campo_empleado_empleado_pagos_path(current_user,@campo,@empleado)}
			format.js 
		end
	end 

	def destroy
		@empleado_pago=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id]).empleado_pagos.find(params[:id])
	    @empleado_pago.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}# este no se usa ya que solo optamos al js
			format.js 
		end
	end


	private
    def empleado_pago_params
		params.require(:empleado_pago).permit(:fecha, :motivo, :formaDePago, pago_items_attributes: [:id, :item, :cantidad, :valor, :haberDescuentoExtra, :_destroy])
	end
		
end
