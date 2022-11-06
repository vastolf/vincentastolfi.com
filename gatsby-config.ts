import type { GatsbyConfig } from "gatsby";
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vincent Astolfi - Resume`,
    siteUrl: `https://vincentastolfi.com`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process?.env?.GATSBY_GA_TRACKING_ID,
        defer: true
      }
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Cache-Control: public, max-age=31536000"
        ],
        mergeCachingHeaders: true
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/fav.png',
      },
    },
    `gatsby-plugin-mdx`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `posts`,
         path: `${__dirname}/src/posts`,
       },
     },
  ]
};

export default config;
