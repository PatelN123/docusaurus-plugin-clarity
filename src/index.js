const path = require("path");

module.exports = function(context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { clarity } = themeConfig || {};

  if (!clarity) {
    throw new Error(
      `Nayan Patel - Clarity plugin: You need to specify 'clarity' object in 'themeConfig'`
    );
  }

  const {
    ID,
  } = clarity;

  if (!ID) {
    throw new Error(
      "Nayan Patel - Clarity plugin: The clarity ID is missing"
    );
  }

  return {
    name: "docusaurus-plugin-clarity",

    injectHtmlTags() {

      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${ID}");
            `
          }
        ]
      };
    }
  };
};
