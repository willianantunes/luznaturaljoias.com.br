const siteMetadata = {
  title: `Luz Natural Joias`,
  description: `Realce a sua luz natural. Pedras, cristais e lindas joias em prata 925.`,
  siteUrl: `https://luznaturaljoias.com.br`,
  social: {
    instagram: `https://www.instagram.com/luznaturaljoias`,
    whatsappWeb: `https://web.whatsapp.com/send?phone=5544988066705`,
    whatsappMobile: `https://api.whatsapp.com/send?phone=5544988066705`,
  },
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
