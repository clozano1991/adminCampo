Rails.application.routes.draw do
    
	root to: "inicios#inicio"
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
			get "/mapa" => "campos#elegirMapaBloqueUno", as: :elegirMapaBloqueUno
			get "/mapa" => "campos#elegirMapaBloqueDos", as: :elegirMapaBloqueDos
			get "/mapa" => "campos#elegirMapaBloqueTres", as: :elegirMapaBloqueTres
			resources :huertos
			resources :equipos 
			resources :elemento_contables

		end
	end

	


	
end
