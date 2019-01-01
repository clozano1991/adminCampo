Rails.application.routes.draw do
    
	root to: "inicios#inicio"
	get "user_root" => "campos#index", as: :user_root

	devise_for :users  
		
	resources :users do
		resources :campos do
			resources :empleados do
				resources :empleado_horarios
				resources :empleado_pagos do
					resources :pago_items
				end

				resources :empleado_abandonos
				resources :empleado_observaciones 
			end
			#para la parte del mapa de fondo que tienen los bloques donde estan los huertos
			get "/mapa" => "campos#elegirMapaBloqueUno", as: :elegirMapaBloqueUno
			get "/mapa" => "campos#elegirMapaBloqueDos", as: :elegirMapaBloqueDos
			get "/mapa" => "campos#elegirMapaBloqueTres", as: :elegirMapaBloqueTres
			resources :huertos
			resources :equipos do
				resources :depreciaciones
			end
			resources :elemento_contables 
			get "/cambiarInfoContableAno" => "elemento_contables#recopiladoElementosContablesEnUnAno", as: :recopiladoElementosContablesEnUnAno
            get "/listadoElementosContablesEspecificos/:cuentaPrincipalEspecifica/:cuentaSecundariaEspecifica" => "elemento_contables#indexEspecificoElementosContables", as: :indexEspecificoElementosContables

			#para la parte de las configuraciones de parametros
			get "/configuracionParametros" => "campos#configuracionParametros", as: :configuracionParametros
			resources :gestion_cesantia_seguros

		end
	end

	


	
end
