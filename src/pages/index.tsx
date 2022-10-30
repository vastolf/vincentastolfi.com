import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import Marquee from "../components/Marquee/Marquee"
import Bio from "../components/Bio/Bio"
import Experience from "../components/Experience/Experience"
import References from "../components/References/References"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

const IndexPage = () => {
  return (
    <Layout>
        <Header />
        <Marquee />
        <Bio />
        <Experience />
        <References />
        <Contact />
        <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vincent Astolfi CV</title>
