module.exports = {
  siteMetadata: {
    title: `e-Ulaznice`,
    description: `Ulaznice za sve najpopularnije događaje na jednom mjestu!`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "Naslovnica",
        link: "/",
        id: "naslid",
      },
      {
        text: "Događaji",
        link: "/dogadaji",
        id: "dogid",
      },
      {
        text: "Novosti",
        link: "/novosti",
        id: "novid",
      },
      {
        text: "Dojmovi",
        link: "/izvjestaji",
        id: "izvjid",
      },
      {
        text: "Registracija",
        link: "/registracija",
        id: "regid",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
