Rails.application.routes.draw do
    


	root to: "inicios#inicio"
	devise_for :users 
		
	resources :users do
		resources :campos do
			resources :huertos
			get "/mapa" => "campos#elegir_mapa", as: :elegir_mapa
		end
	end

	


	
end
