source "https://rubygems.org"

ruby "2.5.0"

# Back End
gem "rails"
gem "unicorn"
gem "pg"

# Front End
gem "sass-rails"
gem "bootstrap-sass"
gem "font-awesome-rails"
gem "uglifier"
gem "jquery-rails"
gem "jquery-turbolinks"
gem "turbolinks"

group :development do
  gem "capistrano-postgresql"
  gem "capistrano-rails"
  gem "capistrano-rails-collection"
  gem "capistrano-rvm"
  gem "capistrano-secrets-yml"
  gem "capistrano-unicorn-nginx", github: "capistrano-plugins/capistrano-unicorn-nginx", branch: "systemd"

  gem "pry"
  gem "better_errors"
  gem "binding_of_caller"
  gem "spring"
end
