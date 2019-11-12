Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :sample_packs, only: [:index, :show] do
      resources :samples, only:[:index]
    end
    resource :session, only: [:create, :destroy]
  end
end
