import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import NotFound from "../components/NotFound/NotFound"

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Vincent Astolfi - 404</title>
