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
        "trackingId": process?.env?.GOOGLE_ANALYTICS_TRACKING_ID
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
    }
  ]
};

export default config;
