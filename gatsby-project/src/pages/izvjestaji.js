import React from "react"
import Layout from "../components/Layout/layout"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardDeck,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/izvjestaji.css"
import { graphql } from "gatsby"
import naslovna_konc from "../assets/naslovna_konc.jpg"

const IzvjestajiPage = props => {
  return (
    <Layout>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={naslovna_konc} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card id="a">
          <CardImg top width="100%" src={naslovna_konc} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card id="a">
          <CardImg top width="100%" src={naslovna_konc} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <h1>Izvještaji</h1>
      <p>Ovo je stranica na kojoj će se nalaziti korisnički izvještaji.</p>
    </Layout>
  )
}

export default IzvjestajiPage

export const query = graphql`
  query {
    glazba: file(relativePath: { eq: "naslovnica_glazba.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
