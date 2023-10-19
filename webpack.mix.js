const mix = require("laravel-mix");
const { exec } = require("child_process");
const tailwindcss = require("tailwindcss");
const { readdirSync, rmSync, existsSync } = require("fs");

// Set public path to dist if no other directory is set in .env variable
const env = process.env;
const publicPath = "assets";

// Define public and asset path
mix.setPublicPath(publicPath);
mix.setResourceRoot("/assets/");
mix.copyDirectory("src/images", publicPath + "/images");

// Remove contents of publicPath before building
mix.before(() => {
  if (existsSync(publicPath)) {
    readdirSync(publicPath).forEach((f) => {
      return rmSync(`${publicPath}/${f}`, { recursive: true });
    });
  }
});

mix.js("src/js/app.js", "js");

mix.sass("src/css/app.scss", "css").options({
  postCss: [tailwindcss("./tailwind.config.js")],
});

// Filter fonts from the statistics output
mix.after((stats) => {
  const assets = { ...stats.compilation.assets };
  stats.compilation.assets = {};

  for (const [path, asset] of Object.entries(assets)) {
    if (!path.includes("fonts/")) {
      stats.compilation.assets[path] = asset;
    }
  }
});
