import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout/Layout"
import Marquee from "../components/Marquee/Marquee"
import Bio from "../components/Bio/Bio"
import Experience from "../components/Experience/Experience"
import References from "../components/References/References"
import Contact from "../components/Contact/Contact"

const IndexPage: React.FC = () => {
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
    <meta name="description" content="A developer resume site for Vincent Astolfi. View my work history & skillset, or get in contact with me." />
    <meta property="og:title" content="Vincent Astolfi - Resume" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="A developer resume site for Vincent Astolfi. View my work history & skillset, or get in contact with me." />
    <meta property="og:image" content="https://vincentastolfi.com/moon.jpg" />
    <meta property="og:url" content="http://vincentastolfi.com" />
  </>
);

