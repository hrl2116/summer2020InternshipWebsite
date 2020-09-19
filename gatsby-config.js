module.exports = {
  siteMetadata: {
    siteUrl: `https://www.shoptaki.com`,
    title: `Shoptaki`,
    description: `At Shoptaki, we are committed to bringing the best distributed AI solutions to simplify global transactions.`,
    author: `Asnee Fernando`,

    menuLinks: [
      {
        title: "About Us",
        subLinks: [
          {
            title: "Our Mission",
            link: "/our-mission/"
          }
        ]
      },
      {
        title: "Smartchain",
        subLinks: [
          {
            title: "Why Smartchain?",
            link: "/why-smartchain/"
          }
        ]
      },
      {
        title: "Our Solution",
        subLinks: [
          {
            title: "Use Cases",
            link: "/use-cases/"
          },
          {
            title: "Products",
            link: "/products/"
          }
        ]
      }, 
      {
        title: "Contact Us",
        link: "/contact-us/"
      }

    ],

  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }`,

        resolveSiteUrl: ({site, allSitePage}) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `yearly`,
              priority: 0.7,
            }
          })
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shoptaki`,
        short_name: `Shoptaki`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_vertical.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172922550-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
