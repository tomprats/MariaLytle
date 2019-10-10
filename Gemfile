source "https://rubygems.org"

ruby "2.5.0"

gem "bcrypt"
gem "haml"
gem "pg"
gem "rails"
gem "unicorn"
gem "webpacker"

group :development do
  gem "capistrano-postgresql"
  gem "capistrano-rails"
  gem "capistrano-rails-collection"
  gem "capistrano-rvm"
  gem "capistrano-secrets-yml"
  gem "capistrano-unicorn-nginx",
    branch: "systemd",
    git: "https://github.com/capistrano-plugins/capistrano-unicorn-nginx.git"

  gem "better_errors"
  gem "binding_of_caller"
  gem "listen"
  gem "pry"
  gem "rubocop-airbnb",
    git: "https://github.com/mcamara/ruby.git",
    glob: "rubocop-airbnb/*.gemspec" # Until airbnb supports ruby 2.6
  gem "rubocop-traitify"
  gem "spring"
end
