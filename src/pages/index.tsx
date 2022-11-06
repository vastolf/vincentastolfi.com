import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout/Layout"
import Marquee from "../components/Marquee/Marquee"
import Bio from "../components/Bio/Bio"
import Experience from "../components/Experience/Experience"
import References from "../components/References/References"
import Contact from "../components/Contact/Contact"

const IndexPage = () => {
  return (
    <Layout>
        <Marquee />
        <Bio />
        <Experience />
        <References />
        <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Vincent Astolfi - Resume</title>
    <meta name="description" content="A developer resume site for Vincent Astolfi. View my work history & skillset, or get in contact with me."></meta>
  </>
);

