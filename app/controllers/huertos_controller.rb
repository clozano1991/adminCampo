class HuertosController < ApplicationController
	before_action :authenticate_user!

	def index
		@huertos=current_user.campos.find(params[:campo_id]).huertos.all
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.build

	end
    def show
    	@campo=current_user.campos.find(params[:campo_id])
    	@huerto=current_user.campos.find(params[:campo_id]).huertos.find(params[:id])
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
	
	def huerto_params
		params.require(:huerto).permit(:nombre, :clase, :coordenadas, :cultivo, :variedades, :descripcion, :bloqueMapa)
	end



end
