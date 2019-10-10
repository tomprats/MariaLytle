Rails.application.routes.draw do
  root "pages#show"

  scope :api do
    resource :profile, only: [:show, :update]
    post :reset_password, to: "sessions#reset_password"
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:index, :create, :update, :destroy]
    get "*path", to: "application#not_found"
  end

  get "*path", to: "pages#show"
end
