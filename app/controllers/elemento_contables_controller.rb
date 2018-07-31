require "date"

class ElementoContablesController < ApplicationController
	before_action :authenticate_user!

	def index
		@elemento_contables=current_user.campos.find(params[:campo_id]).elemento_contables.all
		@campo=current_user.campos.find(params[:campo_id])

		#---------------------------obtenemos el listado de las fechas---------------------
		@anos=[]
		#se extraen las fechas y se pone el año en un arreglo
		@elemento_contables.each do |elemento_contable|
		  @anos.push(elemento_contable.fecha.to_s.split("-")[0])
		end
		#se pasa el arreglo a int
		@anosInt=[]
		@anos.each do |anoStr|
			@anosInt.push(anoStr.to_i)
		end
		#ordenamos de mayor a menor
		@anosInt.sort!
		#quitamos los dulicados
		@anosInt.uniq!
		#pasamos nuevamente a string
		@anos=[]
        @anosInt.each do |anoInt|
			@anos.push(anoInt.to_s)
		end
		@anos.delete("0")
		@anos.reverse!
		# usamos el arrego anos en el view del index
	end

	def new
		@elemento_contable=current_user.campos.find(params[:campo_id]).elemento_contables.build
		@campo=current_user.campos.find(params[:campo_id])
	end

	def create
		@campo=current_user.campos.find(params[:campo_id])
		@elemento_contable=current_user.campos.find(params[:campo_id]).elemento_contables.build(elemento_contable_params)
		@elemento_contable.save
		respond_to do|format|
			format.html {redirect_to user_campo_elemento_contables_path(current_user, @campo)}
			format.js 
		end	
	end



	def elemento_contable_params
		params.require(:elemento_contable).permit(:tipo,:nombre, :tipoIngresoEgreso, :fecha, :monto , :obserbacion)
	end
end
