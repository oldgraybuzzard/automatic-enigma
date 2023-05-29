const withSitemap = require('next-sitemap')();

module.exports = withSitemap({
  siteUrl: 'https://melken-solutions.com',
  generateIndexSitemap: 'true',
},
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
)