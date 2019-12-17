import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardDeck,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import NaslovnicaStyle from "../styles/index.module.css"

const NaslovnicaPage = props => {
  const items = [
    {
      src: props.data.ostalo.childImageSharp.fluid,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: props.data.glazba.childImageSharp.fluid,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: props.data.sport.childImageSharp.fluid,
      altText: "Slide 3",
      caption: "Slide 3",
    },
    {
      src: props.data.koncert.childImageSharp.fluid,
      altText: "Slide 4",
      caption: "Slide 4",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Img
          fluid={item.src}
          alt={item.altText}
          className={NaslovnicaStyle.crouselImage}
          imgStyle={{
            objectFit: "cover", //PROMIJENITI
          }}
        />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Layout>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <CardDeck>
        <Card>
          {/* <CardImg top width="100%" src={naslovna_konc} alt="Card image cap" /> */}
          <Img
            className={NaslovnicaStyle.cardImage}
            fluid={props.data.glazba.childImageSharp.fluid}
          />
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
        <Card>
          <Img
            className={NaslovnicaStyle.cardImage}
            fluid={props.data.sport.childImageSharp.fluid}
          />
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
        <Card>
          <Img
            className={NaslovnicaStyle.cardImage}
            fluid={props.data.ostalo.childImageSharp.fluid}
          />
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
    </Layout>
  )
}

export default NaslovnicaPage

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
    koncert: file(relativePath: { eq: "naslovna_konc.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
