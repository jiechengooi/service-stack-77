import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import AboutBanner from '../components/page-banners/AboutBanner'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'

export default () => {
  const data = useStaticQuery(graphql`query MyQuery {
    file(relativePath: {eq: "building-business-ceiling-empty-trucking company charlotte nc.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
  <>
  <Navbar />
  <AboutBanner />
    <Layout>
      <section className="section">
        <div className="columns">
          <div className="column">
            <h1 className="title">
                Why us?We guarantee 100% satisfaction.
            </h1>
            <p className="content">
                All our academic and scientific proofreaders are highly qualified native English speakers. The price is worked out at a flat rate per thousand words, so you know exactly how much the editing will cost in advance.
            </p>
            <button type="button" className="button is-medium is-success is-dark">View Our Testimonials</button>
          </div>
          <div className="column">
            <Img
              fluid={ data.file.childImageSharp.fluid } 
              alt="inside a trucking depot"
            />
          </div>
        </div>
      </section>
    </Layout>
  </>
  )
}