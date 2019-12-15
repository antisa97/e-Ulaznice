import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const RegistracijaPage = props => {
  return (
    <Layout>
      <h1>Registracija</h1>
      <p>Ovo je stranica na kojoj će se korisnici registrirati.</p>
    </Layout>
  )
}

export default RegistracijaPage

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
