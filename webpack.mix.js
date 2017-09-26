let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if(!mix.inProduction()) {
    mix.js('resources/assets/js/app.js', 'public/js')
        .extract(['lodash', 'axios'])
        .sourceMaps();
    
    mix.sass('resources/assets/sass/app.scss', 'public/css').sourceMaps();
    
    mix.browserSync('phinocio.dev');
}


if (mix.inProduction()) {
    mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['lodash', 'axios']);

    mix.sass('resources/assets/sass/app.scss', 'public/css');
    mix.version();
    mix.disableNotifications();
}