import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import NaslovnicaStyle from "../styles/index.module.css"

const NaslovnicaPage = props => {
  const items = [
    {
      src: props.data.carousel2.childImageSharp.fluid,
      altText: "Kralj lavova",
      caption: "Kralj lavova",
      captionText: "Cinestar Rijeka 5. 2. 2020.",
    },
    {
      src: props.data.carousel1.childImageSharp.fluid,
      altText: "Parni valjak",
      caption: "Parni valjak",
      captionText: "Pulska arena 17.01.2020.",
    },
    {
      src: props.data.carousel3.childImageSharp.fluid,
      altText: "Hrvatska-Engleska",
      caption: "Hrvatska-Engleska",
      captionText: "Poljud Split 17. 3. 2020.",
    },
    {
      src: props.data.carousel4.childImageSharp.fluid,
      altText: "Ero s onoga svijeta",
      caption: "Ero s onoga svijeta",
      captionText: "HNK Osijek 15. 2. 2020.",
    },
    {
      src: props.data.carousel5.childImageSharp.fluid,
      altText: "Orašar",
      caption: "Orašar",
      captionText: "HNK Rijeka 2. 2. 2020.",
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
        {/* <img src={item.src} alt={item.altText} /> */}
        <Img
          fluid={item.src}
          alt={item.altText}
          className={NaslovnicaStyle.crouselImage}
          imgStyle={{
            objectFit: "cover ",
          }}
        />
        <Link to="/dogadaji">
          <CarouselCaption
            captionText={item.captionText}
            captionHeader={item.caption}
            id={NaslovnicaStyle.caption}
          />
        </Link>
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
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
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
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.cultureIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.kultura}
              >
                Kultura
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                Pregled najaktualnijih događaja iz svijeta kulture i hrvatske
                kulturne scene.
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="success"
                href="/dogadajKultura"
              >
                Pogledajte više
              </Button>
            </div>
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.sportIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.sport}
              >
                Sport
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                Širok izbor uzbudljivih sportskih zbivanja sa domaćih i stranih
                terena.
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="primary"
                href="/dogadajSport"
              >
                Pogledajte više
              </Button>
            </div>
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.filmIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.film}
              >
                Film
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                Za sve filmoljupce, pogledajte našu ponudu najnovijih filmova.
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="danger"
                href="/dogadajFilm"
              >
                Pogledajte više
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NaslovnicaPage

export const query = graphql`
  query {
    carousel1: file(relativePath: { eq: "carouselParniValjak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 418) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    carousel2: file(relativePath: { eq: "carouselKraljLavova.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 557) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    carousel3: file(relativePath: { eq: "carouselFootball.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1922, maxHeight: 670) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    carousel4: file(relativePath: { eq: "carouselEro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    carousel5: file(relativePath: { eq: "carouselOrasar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2202, maxHeight: 767) {
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
