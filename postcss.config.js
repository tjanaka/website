module.exports = {
  plugins: [
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["src/**/*.html", "src/**/*.md", "src/**/*.js"],
    }),
  ],
};
