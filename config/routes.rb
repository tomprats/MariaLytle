Rails.application.routes.draw do
  root "pages#index"
  get :about, to: "pages#about"
  get :youtube, to: "pages#youtube"
  get :contact, to: "pages#contact"
end
