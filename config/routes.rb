Rails.application.routes.draw do
    


	root to: "inicios#inicio"
	devise_for :users 
		
	resources :users do
		resources :campos do
			resources :huertos
			get "/mapa" => "huertos#elegir_mapa", as: :user_campo_huerto_mapa
		end
	end

	


	
end
