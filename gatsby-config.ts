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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process?.env?.GATSBY_GA_TRACKING_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
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
  ]
};

export default config;
