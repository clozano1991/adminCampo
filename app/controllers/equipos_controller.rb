class EquiposController < ApplicationController
	before_action :authenticate_user!
	def index
		@campo=current_user.campos.find(params[:campo_id])
		@equipos=current_user.campos.find(params[:campo_id]).equipos.all
	end
    def show
    	@campo=current_user.campos.find(params[:campo_id])
    	
    end

	def create
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.build(huerto_params)
		@huerto.save
		respond_to do|format|
			format.html {redirect_to user_campo_huertos_path(current_user, @campo)}
			format.js 
		end
	end

	def update
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:id])
		@huerto.update(huerto_params)
		respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end

	def destroy
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:id])
	    @huerto.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end


	private
	
	def equipo_params
		params.require(:equipo).permit(:equipo, :marca, :modelo, :fechaFabricacion, :fechaAdquisicion, :estado)
	end
end