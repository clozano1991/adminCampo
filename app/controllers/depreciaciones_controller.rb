class DepreciacionesController < ApplicationController
    before_action :authenticate_user!

	def index
		@campo=current_user.campos.find(params[:campo_id])
		@equipo=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id])
		@depreciaciones=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id]).depreciaciones.all
    end

    def new
    	@campo=current_user.campos.find(params[:campo_id])
    	@equipo=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id])
		@depreciacione=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id]).depreciaciones.build
    end

    def create
		@campo=current_user.campos.find(params[:campo_id])
		@equipo=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id])
		@depreciacione=current_user.campos.find(params[:campo_id]).equipos.find(params[:equipo_id]).depreciaciones.build(depreciacione_params)
		@depreciacione.save
		respond_to do|format|
			format.html {redirect_to user_campo_equipo_depreciaciones_path(current_user, @campo, @equipo)}
			format.js 
		end
	end
    

    def depreciacione_params
		params.require(:depreciacione).permit(:fecha, :valorDepreciacion)
	end
 

end
