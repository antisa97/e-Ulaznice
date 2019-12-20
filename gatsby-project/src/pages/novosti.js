// import React from "react"
// import Layout from "../components/layout"

// const NovostiPage = () => {
//   return (
//     <Layout>
//       <h1>Novosti</h1>
//       <p>Ovo je stranica na kojoj će se nalaziti sve novosti.</p>
//     </Layout>
//   )
// }

// export default NovostiPage

import React, { useState } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import naslovna_konc from "../images/naslovna_konc.jpg"
import naslovnica_sport from "../images/naslovnica_sport.jpeg"
import naslovnica_glazba from "../images/naslovnica_glazba.jpg"
import naslovnica_ostalo from "../images/naslovnica_ostalo.jpg"
import NovostiStyle from "../styles/novosti.module.css"

const items = [
  {
    src: naslovna_konc,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: naslovnica_ostalo,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: naslovnica_glazba,
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: naslovnica_sport,
    altText: "Slide 4",
    caption: "Slide 4",
  },
]

const NovostiPage = props => {
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
        <img
          src={item.src}
          alt={item.altText}
          style={{ height: "450px", width: "100%" }}
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
      <Carousel next={next} previous={previous}>
        <CarouselIndicators
          activeIndex={activeIndex}
          onClickHandler={true}
          items={items}
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
    </Layout>
  )
}

export default NovostiPage
