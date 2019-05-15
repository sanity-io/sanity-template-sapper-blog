// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
import blocksToHtml from '@sanity/block-content-to-html'
// https://www.npmjs.com/package/@sanity/image-url
import urlBuilder from '@sanity/image-url'
import client from '../sanityClient'

const urlFor = source => urlBuilder(client).image(source)

const { h } = blocksToHtml

export default {
  types: {
    mainImage: ({ node }) =>
      h('img', {
        src: urlFor(node)
          .width(600)
          .auto('format')
          .url()
      }),
    authorReference: ({ node }) => h('b', {}, node.author.name),
    code: ({ node }) =>
      h('pre', { 'data-language': node.language }, h('code', {}, node.code))
  }
}
