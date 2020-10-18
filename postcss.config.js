module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["src/**/*.html", "src/**/*.md", "src/**/*.js"],
      safelist: [
        "body",
        "html",
        "a",
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "breadcrumbs",
        "content",
        "form",
        "input",
        "textarea",
        "intro",
        "btn",
        "loaded",
        "page-title",
        "required",
        "row",
        "visually-hidden",
        "menu-visible",
      ],
    }),
    require("autoprefixer"),
  ],
};
