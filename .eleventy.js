const { DateTime } = require("luxon");


module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
  });
  config.addFilter("before", function(string, index) {
    return string.split(index)[0];
  });


  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));


  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data/${env}`
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : ["njk"],
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
