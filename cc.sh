composer cc
sudo rm -rf bootstrap/cache/*.*
sudo rm -rf storage/framework/cache/*
sudo rm -rf storage/framework/sessions/*
sudo rm -rf storage/framework/views/*
sudo rm -rf storage/logs/*
sudo rm -rf storage/app/public/*

php artisan clear-compiled

php artisan config:clear
php artisan event:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
php artisan debugbar:clear
composer dump-autoload
