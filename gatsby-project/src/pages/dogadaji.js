import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/layout"
import "../styles/dogadaji.css"

const DogadajiPage = props => {
  return (
    <Layout>
      <p class="dogadaji-title">Događaji</p>
      <div class="search">
        <input type="search" class="search-box text" placeholder="Search..." />
        <select class="select main-filter-box courses-input-row text">
          <option selected disabled>
            Pretraži prema...
          </option>
          <option value="Naziv događaja">Naziv događaja</option>
          <option value="Datum">Datum</option>
          <option value="Mjesto">Mjesto</option>
          <option value="Cijena">Cijena</option>
        </select>
      </div>
      <div id="dogadaji-container">
        <div class="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.glazba.childImageSharp.fluid}
          />
          <div class="dogadaji-item-dogadaj-all">
            <div class="dogadaji-item-dogadaj-left">
              <p class="dogadaji-item-dogadaj-naziv">Parni valjak</p>
              <p class="dogadaji-item-dogadaj">17. 1. 2020.</p>
              <p class="dogadaji-item-dogadaj">Pula</p>
            </div>
            <div class="dogadaji-item-dogadaj-right">
              <p class="dogadaji-item-cijena">120,00 kn</p>
              <button class="dogadaji-button-kupi">KUPI</button>
            </div>
          </div>
        </div>
        <div class="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.sport.childImageSharp.fluid}
          />
          <div class="dogadaji-item-dogadaj-all">
            <div class="dogadaji-item-dogadaj-left">
              <p class="dogadaji-item-dogadaj-naziv">Hajduk-Dinamo</p>
              <p class="dogadaji-item-dogadaj">1. 12. 2019.</p>
              <p class="dogadaji-item-dogadaj">Split</p>
            </div>
            <div class="dogadaji-item-dogadaj-right">
              <p class="dogadaji-item-cijena">100,00 kn</p>
              <button class="dogadaji-button-kupi">KUPI</button>
            </div>
          </div>
        </div>
        <div class="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.ostalo.childImageSharp.fluid}
          />
          <div class="dogadaji-item-dogadaj-all">
            <div class="dogadaji-item-dogadaj-left">
              <p class="dogadaji-item-dogadaj-naziv">Kralj lavova</p>
              <p class="dogadaji-item-dogadaj">12. 2. 2020.</p>
              <p class="dogadaji-item-dogadaj">Cinestar Split</p>
            </div>
            <div class="dogadaji-item-dogadaj-right">
              <p class="dogadaji-item-cijena">30,00 kn</p>
              <button class="dogadaji-button-kupi">KUPI</button>
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
