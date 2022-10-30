import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vincent Astolfi - Resumé / CV`,
    siteUrl: `https://vincentastolfi.com`
  },
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "TBD"
    }
  }]
};

export default config;
