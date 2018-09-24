# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "marialytle"
set :keep_releases, 3
set :repo_url, "git@github.com:tomprats/marialytle.git"

# Rails options
set :keep_assets, 3
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads"
set :migration_role, :app

# Other plugin options
set :init_system, :systemd
set :nginx_server_name, "www.marialytle.com"
set :nginx_upload_local_cert, false
set :pg_system_user, "deploy"
set :pg_without_sudo, true
set :unicorn_logrotate_enabled, true
