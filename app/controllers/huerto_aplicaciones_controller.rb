class HuertoAplicacionesController < ApplicationController
    before_action :authenticate_user!

	def index
		@huerto_aplicaciones=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.all
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
	end

	def show
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@huerto_aplicacione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.find(params[:id])
	end
 
	 def new
    	@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@huerto_aplicacione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.build
    end

    def create 
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@hueto_apliccione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.build(huerto_aplicacione_params)
		@hueto_apliccione.save
		respond_to do|format|
			format.html {redirect_to user_campo_huerto_huerto_aplicaciones_path(current_user, @campo, @huerto)}
			format.js 
		end
	end

	def edit
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@huerto_aplicacione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.find(params[:id])
	end
	
	def update
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@huerto_aplicacione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.find(params[:id])
		@huerto_aplicacione.update(huerto_aplicacione_params)
		respond_to do|format|
			format.html {redirect_to user_campo_huerto_huerto_aplicaciones_path(current_user,@campo,@huerto)}
			format.js 
		end
	end 

	def destroy
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id])
		@huerto_aplicacione=@huerto_aplicacione=current_user.campos.find(params[:campo_id]).huertos.find(params[:huerto_id]).huerto_aplicaciones.find(params[:id])
	    @huerto_aplicacione.destroy
	    respond_to do|format|
			format.html {redirect_to user_campo_huerto_huerto_aplicaciones_path(current_user,@campo,@huerto)}
			format.js 
		end
	end











    def huerto_aplicacione_params
		params.require(:huerto_aplicacione).permit(:fechaaplicacion, :productocomercial, :ingredienteactivo, :dosis, :personalacargo, :recomendadopor, :efecto, :observacion)
	end




end
 