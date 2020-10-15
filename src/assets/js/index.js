// Imports index.scss so that Webpack can detect it.
import "../css/index.scss";

// Placeholder until we get real code that needs vendor.js.
Array.from(document.getElementsByTagName("p")).forEach((p) => {
  console.log(`p ${index}, startsWith('W')`, p, p.innerHTML.startsWith("W"));
});
