module.exports = config => {
  
  config.addCollection('posts', collection => collection.getFilteredByGlob('./src/posts/*.md'));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
