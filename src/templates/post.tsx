import React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Content from "../components/Content/Content"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ data, children }) {
  return (
    <>
        <Layout>
            <Hero title={data.mdx.frontmatter.title} subtitle={data.mdx.frontmatter.tagline} />
            <MDXProvider components={shortcodes}>
                <Content>
                    {children}
                </Content>
            </MDXProvider>
        </Layout>
    </>
  )
}

export const Head: HeadFC = ({data}) => (
  <>
    <title>{data?.mdx?.frontmatter?.title} - Vincent Astolfi</title>
    <meta name="description" content={data?.mdx?.frontmatter?.tagline}></meta>
  </>
);

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tagline
        slug
        background
        date
      }
    }
  }
`