import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import DogadajiStyle from "../styles/dogadaji.module.css"
import { Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const DogadajiPage = props => {
  return (
    <Layout>
      <div className={DogadajiStyle.page}>
        <div className={DogadajiStyle.pageDiv}>
          <h3 className={DogadajiStyle.pageTitle}>Događaji</h3>
          <div className={DogadajiStyle.cardContainer}>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <p>koncert</p>
              <Button outline color="danger">
                Kupi
              </Button>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <p>ERO S ONOGA SVIJETA</p>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <p>koncert</p>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <p>koncert</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DogadajiPage

export const query = graphql`
  query {
    glazba: file(relativePath: { eq: "naslovnica_glazba.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    kazaliste: file(relativePath: { eq: "naslovnica_kazaliste.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sport: file(relativePath: { eq: "naslovnica_sport.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ostalo: file(relativePath: { eq: "naslovnica_ostalo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
