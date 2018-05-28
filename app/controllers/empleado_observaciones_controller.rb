class EmpleadoObservacionesController < ApplicationController
    before_action :authenticate_user!

	def index
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
		@empleados=current_user.campos.find(params[:campo_id]).empleados.all
		@campo=current_user.campos.find(params[:campo_id])
	end

	def show
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:empleado_id])
	end


	private
    def empleado_observacione_params
		params.require(:empleado_observacione).permit(:fecha )
	end
end
