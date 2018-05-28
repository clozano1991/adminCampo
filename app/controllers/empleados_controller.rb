class EmpleadosController < ApplicationController
	before_action :authenticate_user!

	def index
		@empleados=current_user.campos.find(params[:campo_id]).empleados.all
		@campo=current_user.campos.find(params[:campo_id])	
	end 

	def show
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:id])
		@campo=current_user.campos.find(params[:campo_id])
	end

	def new
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.build
	end

	def create
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.build(empleado_params)
		@empleado.save
		respond_to do|format|
			format.html {redirect_to user_campo_empleados_path(current_user,@campo)}
			format.js 
		end
	end

	def edit
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:id])
	end
	
	def update
		@campo=current_user.campos.find(params[:campo_id])
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:id])
		@empleado.update(empleado_params)
		respond_to do|format|
			format.html {redirect_to user_campo_empleados_path(current_user,@campo)}
			format.js 
		end
		
	end 

	def destroy
		@empleado=current_user.campos.find(params[:campo_id]).empleados.find(params[:id])
	    @empleado.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end

    private
    def empleado_params
		params.require(:empleado).permit(:nombre, :apellidos, :rut, :direccion, :telefonoContacto, 
			:telefonoEmergencia, :sueldoBaseMensual, :afpAcogida, :resumenPersona, :cargo, :resumenCargo, 
			:tipoContrato, :nivelEducacion,:manejoTecnologia, :antecedentesLaborales, 
			:otrasHabilidades, :porcentajeCotizacionAFP ,:isapreAcogida, :porcentajeCotizacionIsapre, 
			:banco, :tipoCuentaBanco, :numeroCuentaBanco, :emailEmpleado, :fechaContratacion, 
			:fechaDesvinculacion )
	end
end
