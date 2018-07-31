class EquiposController < ApplicationController
	before_action :authenticate_user!
	def index
		@campo=current_user.campos.find(params[:campo_id])
		@equipos=current_user.campos.find(params[:campo_id]).equipos.all
		
	end
    def show
    	@campo=current_user.campos.find(params[:campo_id])
    	@equipo=current_user.campos.find(params[:campo_id]).equipos.find(params[:id])
    	
    end

    def new
    	@campo=current_user.campos.find(params[:campo_id])
		@equipo=current_user.campos.find(params[:campo_id]).equipos.build
    end

	def create
		@campo=current_user.campos.find(params[:campo_id])
		@equipo=current_user.campos.find(params[:campo_id]).equipos.build(equipo_params)
		@equipo.save
		respond_to do|format|
			format.html {redirect_to user_campo_equipos_path(current_user, @campo)}
			format.js 
		end
	end

	def update
		@huerto=current_user.campos.find(params[:campo_id]).equipos.find(params[:id])
		@huerto.update(huerto_params)
		respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end

	def destroy
		@equipo=current_user.campos.find(params[:campo_id]).equipos.find(params[:id])
	    @equipo.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end


	private
	
	def equipo_params
		params.require(:equipo).permit(:tipoEquipo, :marca, :modelo, :fechaFabricacion, :fechaAdquisicion, :estado, :compradoAVendedor, :patente, :descripcion)
	end
end








