import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import DogadajiStyle from "../styles/dogadaji.module.css"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const DogadajiPage = props => {
  return (
    <Layout>
      <p className="dogadaji-title">Događaji</p>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
      {/* <div className="search">
        <input
          type="search"
          className="search-box text"
          placeholder="Search..."
        /> */}
      {/* <select className="select main-filter-box courses-input-row text">
          <option selected disabled>
            Pretraži prema...
          </option>
          <option value="Naziv događaja">Naziv događaja</option>
          <option value="Datum">Datum</option>
          <option value="Mjesto">Mjesto</option>
          <option value="Cijena">Cijena</option>
        </select> */}
      {/* </div>
      <div id="dogadaji-container">
        <div className="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.glazba.childImageSharp.fluid}
          />
          <div className="dogadaji-item-dogadaj-all">
            <div className="dogadaji-item-dogadaj-left">
              <p className="dogadaji-item-dogadaj-naziv">Parni valjak</p>
              <p className="dogadaji-item-dogadaj">17. 1. 2020.</p>
              <p className="dogadaji-item-dogadaj">Pula</p>
            </div>
            <div className="dogadaji-item-dogadaj-right">
              <p className="dogadaji-item-cijena">120,00 kn</p>
              <button className="dogadaji-button-kupi">KUPI</button>
            </div>
          </div>
        </div>
        <div className="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.sport.childImageSharp.fluid}
          />
          <div className="dogadaji-item-dogadaj-all">
            <div className="dogadaji-item-dogadaj-left">
              <p className="dogadaji-item-dogadaj-naziv">Hajduk-Dinamo</p>
              <p className="dogadaji-item-dogadaj">1. 12. 2019.</p>
              <p className="dogadaji-item-dogadaj">Split</p>
            </div>
            <div className="dogadaji-item-dogadaj-right">
              <p className="dogadaji-item-cijena">100,00 kn</p>
              <button className="dogadaji-button-kupi">KUPI</button>
            </div>
          </div>
        </div>
        <div className="dogadaji-container-item">
          <Img
            className="dogadaji-img"
            fluid={props.data.ostalo.childImageSharp.fluid}
          />
          <div className="dogadaji-item-dogadaj-all">
            <div className="dogadaji-item-dogadaj-left">
              <p className="dogadaji-item-dogadaj-naziv">Kralj lavova</p>
              <p className="dogadaji-item-dogadaj">12. 2. 2020.</p>
              <p className="dogadaji-item-dogadaj">Cinestar Split</p>
            </div>
            <div className="dogadaji-item-dogadaj-right">
              <p className="dogadaji-item-cijena">30,00 kn</p>
              <button className="dogadaji-button-kupi">KUPI</button>
            </div>
          </div>
        </div>
      </div> */}
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
