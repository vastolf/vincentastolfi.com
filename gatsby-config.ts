import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vincent Astolfi - Resumé`,
    siteUrl: `https://vincentastolfi.com`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": process?.env?.GOOGLE_ANALYTICS_TRACKING_ID
      }
    }
  ]
};

export default config;
