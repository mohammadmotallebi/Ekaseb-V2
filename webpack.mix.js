const mix = require("laravel-mix");
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


mix.scripts(
    [
        "public/js/store.js",
        "public/js/jquery.min.js",
        "public/js/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        "public/select2/js/select2.full.min.js",
        "node_modules/@fortawesome/fontawesome-free/js/all.js",
        "public/js/mask.js",
        "public/js/sb-admin-2.js",
        "public/chart/Chart.min.js",
        "public/noty/noty.min.js",
        "public/js/jquery-confirm.min.js",
        "node_modules/bootstrap-table/dist/bootstrap-table.min.js",
        "node_modules/bootstrap-table/dist/locale/bootstrap-table-fa-IR.min.js",
        "node_modules/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control.min.js",
        "node_modules/@mojs/core/dist/mo.umd.js",
        "public/js/md_datepicker/jquery.md.bootstrap.datetimepicker.js",
        "public/js/fa.js",
        "public/js/others.js",
        "resources/Components",
    ],
    "public/finally/js/all.js"
);
mix.styles(
    [
        "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
        "public/css/sb-admin-2.css",
        "public/chart/Chart.css",
        "public/noty/noty.css",
        "public/noty/themes/relax.css",
        "public/select2/css/select2.css",
        "public/select2/css/select2-bootstrap4.css",
        "node_modules/bootstrap-table/dist/bootstrap-table.min.css",
        "public/js/md_datepicker/jquery.md.bootstrap.datetimepicker.style.css",
        "public/css/jquery-confirm.min.css",
    ],
    "public/finally/css/all.css"
);

mix.js("resources/js/index.jsx", "public/finally/js/app.js").react()
.ts("resources/admin/index.tsx", "public/finally/js/admin.js")
.css("resources/admin/style.module.css", "public/finally/css/admin.css")
.sass("resources/sass/app.scss", "public/finally/css/app.css")
.browserSync("http://localhost:8000/")
.disableNotifications().version()
