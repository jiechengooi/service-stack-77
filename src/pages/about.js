import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import AboutBanner from '../components/page-banners/AboutBanner'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'

export default () => {
  const data = useStaticQuery(graphql`query MyQuery {
    file(relativePath: {eq: "proofreading2.jpg"}) {
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
            Proofreading
            </h1>
            <p className="content">
            In our standard practice, it's already compulsory to recheck the translation carefully before submission to our client. However, we do still offer a premium option to conduct another round of 100% proofreading on top of the compulsory round of rechecking to clients who want the best quality. 
            </p>
          </div>
          <div className="column">
            <Img
              fluid={ data.file.childImageSharp.fluid } 
              alt="inside a trucking depot"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title">
            Formatting
            </h1>
            <p className="content">
            Our typsetting or desktop-publishing engineers are here to do pre-processing to turn uneditable documents into editable formats before passing to our translators to translate. After translation, the translated documents will be passed back to the engineer team to recheck and finalize the format before delivery. 
            </p>
          </div>
          <div className="column">
            <Img
              fluid={ data.file.childImageSharp.fluid } 
              alt="inside a trucking depot" 
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title">
            Translation
            </h1>
            <p className="content">
            Our consultant will communicate with you to fully understand your purposes, objectives and requirements prior to the commencement of any project tasks. As we put the confidentiality as our first priority, all the translation materials will be handled by our team with extreme care, attention and dedication.  
            </p>
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