Rails.application.routes.draw do
    


	root to: "inicios#inicio"
	devise_for :users 
		
	resources :users do
		resources :campos do
			resources :huertos 
		end
	end

	


	
end
