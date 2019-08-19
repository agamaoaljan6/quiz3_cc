Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
        resources :auctions, only: [:index, :show, :create] do
          resources :bids, only: :create
        end
        resource :session, only: [:create, :destroy]

        resources :users, only: [:create] do
          get :current, on: :collection
        end
    end
end
end