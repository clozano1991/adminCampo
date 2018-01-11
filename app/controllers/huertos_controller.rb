class HuertosController < ApplicationController
	before_action :authenticate_user!

	def index
		@huertos=current_user.campos.find(params[:campo_id]).huertos.all
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.build
	end

	def create
		@huerto=current_user.campos.find(params[:campo_id]).huertos.build(huerto_params)
		@huerto.save
		respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end



	private
	
	def huerto_params
		params.require(:huerto).permit(:nombre, :clase, :coordenadas, :cultivo, :variedades, :descripcion)
	end



end
