module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Sebastián González R.'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
   /*  {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    }, */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `servicios`,
        path: `${__dirname}/servicios`
      }
    },
   /*  {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }, */
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ],
}
