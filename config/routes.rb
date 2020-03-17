Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :sample_packs, only: [:index, :show] do
      resources :samples, only:[:index]
    end
    resources :pack_likes, only: [:create]
    delete 'pack_likes', :to => 'pack_likes#destroy'

    resources :sample_likes, only: [:create]
    delete 'sample_likes', :to => 'sample_likes#destroy'

    get 'liked_samples', :to => 'liked_samples#index'

    resource :session, only: [:create, :destroy]
    
  end
end
