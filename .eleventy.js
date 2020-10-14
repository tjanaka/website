// Configuration for Eleventy.

const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  const inputDir = "src";
  const outputDir = "build";

  staticFiles = ["favicon.ico", "images/"];
  for (const file of staticFiles) {
    eleventyConfig.addPassthroughCopy(path.join(inputDir, file));
  }

  // Webpack Files.
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.css");
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.js");
  eleventyConfig.addWatchTarget("./src/compiled-assets/vendor.js");
  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({ "src/compiled-assets": "assets" });

  eleventyConfig.setBrowserSyncConfig({
    port: 8000,
    open: "local",
    online: false,
    localOnly: true,
    host: "localhost",
    notify: true,
    // Only bind to the localhost IP, (instead of 0.0.0.0, which allows external
    // connections -- interesting that this is an undocumented feature here:
    // https://www.browsersync.io/docs/options). I found out about this feature
    // here: https://github.com/BrowserSync/browser-sync/pull/1431
    listen: "localhost",
    // See https://www.11ty.dev/docs/quicktips/not-found/
    callbacks: {
      ready: function (err, bs) {
        const content404 = fs.readFileSync("build/404.html");
        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
