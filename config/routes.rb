Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
