import React from "react"
import Layout from "../components/layout"
import NovostiStyle from "../styles/novosti.module.css"
import { Media } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, Link } from "gatsby"
import img1 from "../images/naslovnica_kazaliste.jpg"

const NovostiPage = props => {
  return (
    <Layout>
      <div className={NovostiStyle.page}>
        <div className={NovostiStyle.pageDiv}>
          <h3 className={NovostiStyle.pageTitle}>Novosti</h3>
          <div className={NovostiStyle.media}>
            <div className={NovostiStyle.left}>
              <Media left>
                <Media
                  className={NovostiStyle.slika1}
                  object
                  src={img1}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Naslov glavne vijesti</Media>
                Kratak opis prve vijesti.
              </Media>
            </div>
            <div className={NovostiStyle.right}>
              <Media>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img1}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Naslov prve sporedne vijesti</Media>
                </Media>
              </Media>
              <Media>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img1}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Naslov druge sporedne vijesti</Media>
                </Media>
              </Media>
              <Media>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img1}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Naslov trece sporedne vijesti</Media>
                </Media>
              </Media>
              <Media>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img1}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Naslov cetvrte sporedne vijesti</Media>
                </Media>
              </Media>
              <Media>
                <Media left>
                  <Media
                    className={NovostiStyle.slika2}
                    object
                    src={img1}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Naslov pete sporedne vijesti</Media>
                </Media>
              </Media>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NovostiPage

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
