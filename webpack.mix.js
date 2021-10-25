const mix = require("laravel-mix");
const glob = require("glob");
const productionSourceMaps = false;

const DIR = {
    js: "resources/js/**/*.js",
    sass: "resources/sass/**/*.scss",
    blade: "resources/views/**/*.blade.php",
};

glob.sync(DIR.js).map((file) => {
    mix.js(file, "public/js")
        .sourceMaps(productionSourceMaps, "source-map")
        .options({
            terser: {
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            },
        });
});

glob.sync(DIR.sass).map((file) => {
    mix.sass(file, "public/css");
});

mix.browserSync({
    https: {
        key: "certs/server.key",
        cert: "certs/server.crt",
    },
    port: 443,
    proxy: {
        target: "http://nginx",
        proxyReq: [
            function (proxyReq) {
                proxyReq.setHeader("HOST", "localhost");
                proxyReq.setHeader("X-Forwarded-Proto", "https");
            },
        ],
    },
    open: false,
    reloadOnRestart: true,
    files: [DIR.js, DIR.sass, DIR.blade],
});
