require "date"
require "time"

class ElementoContablesController < ApplicationController
	before_action :authenticate_user!
 
	def index
		#@elemento_contables=current_user.campos.find(params[:campo_id]).elemento_contables.all
		@elemento_contables=current_user.campos.find(params[:campo_id]).elemento_contables.uniq.pluck(:fecha)
		@campo=current_user.campos.find(params[:campo_id])

		@fechaActual = Time.now

		#---------------------------obtenemos el listado de las fechas---------------------
		@anos=[]
		#se extraen las fechas y se pone el año en un arreglo
		@elemento_contables.each do |elemento_contable|
		  @anos.push(elemento_contable.to_s.split("-")[0])
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

        # para crear un elemento contable desde un modal con js
        @elemento_contable=current_user.campos.find(params[:campo_id]).elemento_contables.build
	end

	def indexEspecificoElementosContables
		@campo=current_user.campos.find(params[:campo_id])
		@elementoContableEspecificos = current_user.campos.find(params[:campo_id]).elemento_contables.where( "cuentaPrincipal = ? AND cuentaSecundaria = ?", params[:cuentaPrincipalEspecifica]  , params[:cuentaSecundariaEspecifica]).order("fecha DESC")
        @nombreCuentaPrincipalEspecifica = params[:cuentaPrincipalEspecifica]
        @nombreCuentaSecundariaEspecifica = params[:cuentaSecundariaEspecifica]

	end
    
    def recopiladoElementosContablesEnUnAno
    	#params[:ano] == "2019"
    	#.uniq.pluck(:fecha, :monto)
    		
    	@campo=current_user.campos.find(params[:campo_id])
        @elementosContablesEnUnAno = current_user.campos.find(params[:campo_id]).elemento_contables.where("fecha <= ? AND fecha >= ?" ,Time.zone.local(params[:ano],12,31), Time.zone.local(params[:ano],1,1))
        respond_to do|format| 
			format.json{ render json: @elementosContablesEnUnAno}
		end		
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

	def update
		@campo=current_user.campos.find(params[:campo_id])
		@elemento_contable=current_user.campos.find(params[:campo_id]).elemento_contables.find(params[:id])
		@elemento_contable.update(elemento_contable_params)
		respond_to do|format|
			format.html {redirect_to user_campo_elemento_contables_path(current_user,@campo)}
			format.js 
		end
	end 

	def destroy
		@elemento_contable=current_user.campos.find(params[:campo_id]).elemento_contables.find(params[:id])
	    @elemento_contable.destroy
	    respond_to do|format|
			format.html {redirect_to index_path}
			format.js 
		end
	end



	def elemento_contable_params
		params.require(:elemento_contable).permit(:nombre, :tipoIngresoEgreso, :fecha, :monto , :observacion, :cuentaPrincipal, :cuentaSecundaria, :cuentaPrincipalEspecifica, :cuentaSecundariaEspecifica)
	end
end
