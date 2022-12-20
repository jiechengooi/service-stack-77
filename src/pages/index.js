import * as React from "react"
import { Link } from "gatsby"
import HomeBanner from '../components/page-banners/HomeBanner'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from '../components/Navbar'


const IndexPage = () => (
  <Layout>
    <Navbar />
    <HomeBanner />
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-centered">
        


        </div>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
