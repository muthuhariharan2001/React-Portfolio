const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')

const sitemap = new SitemapStream({ hostname: 'https://muthu-hariharan.netlify.app' })

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 })
sitemap.end()

streamToPromise(sitemap).then(data => {
  const writeStream = createWriteStream('../../../dist/sitemap.xml')
  writeStream.write(data)
  writeStream.end()
})
