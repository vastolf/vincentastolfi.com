import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Content from "../components/Content/Content"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ data, children }) {
    console.log(data.mdx.frontmatter)
  return (
    <>
        <Layout>
            <Header />
            <Hero title={data.mdx.frontmatter.title} subtitle={data.mdx.frontmatter.tagline} />
                <MDXProvider components={shortcodes}>
                    <Content>
                        {children}
                    </Content>
                </MDXProvider>
            <Footer />
        </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tagline
        slug
        background
      }
    }
  }
`