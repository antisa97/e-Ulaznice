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
import naslovna_konc from "../images/naslovna_konc.jpg"

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
            objectFit: "fill", //PROMIJENITI
          }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Layout>
      <div className={NaslovnicaStyle.divCarousel}>
        <Carousel
          className={NaslovnicaStyle.Carousel}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
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
      </div>
      <div className={NaslovnicaStyle.divRest}>
        <div className={NaslovnicaStyle.rest}>
          <h2 className={NaslovnicaStyle.categoryTitle}>Kategorije</h2>
          <div className={NaslovnicaStyle.cardContainer}>
            {/* <Card className={NaslovnicaStyle.cards}>
              <CardImg
                top
                width="100%"
                src={naslovna_konc}
                alt="Card image cap"
              /> */}
            {/* <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.glazba.childImageSharp.fluid}
              /> */}
            {/* <CardBody>
                <CardTitle>hgf</CardTitle>
                <Button>Saznaj više</Button>
              </CardBody>
            </Card> */}
            {/* <Card className={NaslovnicaStyle.cards}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.sport.childImageSharp.fluid}
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Saznaj više</Button>
              </CardBody>
            </Card> */}
            <div className={NaslovnicaStyle.novoCards}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.cultureIcon.childImageSharp.fluid}
              />
              <h4 className={NaslovnicaStyle.category}>Kultura</h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                From showrooms to sole agents, we have all the tools you need to
                take your
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="info"
              >
                Pogledajte više
              </Button>{" "}
            </div>
            <div className={NaslovnicaStyle.novoCards}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.sportIcon.childImageSharp.fluid}
              />
              <h4 className={NaslovnicaStyle.category}>Sport</h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                From showrooms to sole agents, we have all the tools you need to
                take
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="info"
              >
                Pogledajte više
              </Button>{" "}
            </div>
            <div className={NaslovnicaStyle.novoCards}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.filmIcon.childImageSharp.fluid}
              />
              <h4 className={NaslovnicaStyle.category}>Film</h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                All the insights you require to get your vehicles off the
                production line and
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="info"
              >
                Pogledajte više
              </Button>{" "}
            </div>
            {/* <Card className={NaslovnicaStyle.cards}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.ostalo.childImageSharp.fluid}
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Saznaj više</Button>
              </CardBody>
            </Card> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NaslovnicaPage

export const query = graphql`
  query {
    glazba: file(relativePath: { eq: "slika1.jpg" }) {
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
    cultureIcon: file(relativePath: { eq: "culture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sportIcon: file(relativePath: { eq: "sport.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    filmIcon: file(relativePath: { eq: "film.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
