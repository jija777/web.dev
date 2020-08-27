// =============================================================================
// HOME OVERVIEW
//
// This is the context object for the homepage.
// It helps layout cards featured on the homepage, and their ordering.
//
// =============================================================================

module.exports = function () {
  const lang = 'pl';
  const translated = 'none'; // Default translation status.
  const locale = 'pl_PL';

  return {
    lang,
    locale,
    translated,
    eleventyComputed: {
      permalink: (data) => {
        if (data.permalink) {
          return data.permalink.replace(
            /^\/{{lang}}/,
            '/localized-files/{{lang}}',
          );
        }

        return data.page.inputPath
          .replace(/^.\/src\/site\/content/, '')
          .replace(/index.(md|njk)$/, '')
          .replace(/^\/pl\//, '/localized-files/pl/');
      },
    },
  };
};
