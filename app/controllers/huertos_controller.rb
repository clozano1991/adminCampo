class HuertosController < ApplicationController
	before_action :authenticate_user!

	def index
		@campo=current_user.campos.find(params[:campo_id])
		@huerto=current_user.campos.find(params[:campo_id]).huertos.build
		@huertos=current_user.campos.find(params[:campo_id]).huertos.all

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
		params.require(:huerto).permit(:nombre, :color, :coordenadas, :cultivo, :variedades, :descripcion)
	end



end
