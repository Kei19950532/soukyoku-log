const mix = require("laravel-mix");
const glob = require("glob");
const productionSourceMaps = false;

const version = process.env.MIX_GITHUB_SHA || "development";

/** webpack.config.jsで定義されているwebpackの設定 */
const config = require("./webpack.config");

/** JSのファイル名規則 */
const indexJsName = "public/js/" + version + ".js";

/** CSSのファイル名規則 */
const mainCssName = "public/css/" + version + ".css";

mix.ts("react-src/ts/", indexJsName)
    .sourceMaps(productionSourceMaps, "eval-source-map")
    .options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    })
    .sass("react-src/sass/style.scss", mainCssName)
    .webpackConfig(config)
    .browserSync({
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
        files: ["react-src/sass/**/*.scss", "react-src/ts/**/*.*"],
    });
