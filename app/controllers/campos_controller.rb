class CamposController < ApplicationController
	before_action :authenticate_user!

	def index
		@campos=current_user.campos.all
		@campo=current_user.campos.build
	end 

	

	def create
		@campo=current_user.campos.build(campo_params)
		@campo.save
		respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end
	
	def update
		@campo=current_user.campos.find(params[:id])
		@campo.update(campo_params)
		respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end 

	def destroy
		@campo=current_user.campos.find(params[:id])
	    @campo.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end

	private
	
	def campo_params
		params.require(:campo).permit(:nombre, :propietario, :direccion, :comentarios, :recordatorio)
	end

end
