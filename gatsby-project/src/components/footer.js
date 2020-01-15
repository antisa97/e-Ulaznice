import React from "react"
import FooterStyle from "../components/componentsStyles/footer.module.css"
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import mail from "../images/mail.png"
import phone from "../images/phone.png"
import twitter from "../images/twitter.png"

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.container}>
        <div className={FooterStyle.findUs}>
          <h5 className={FooterStyle.title}>
            Potražite nas na društvenim mrežama
          </h5>
          <div className={FooterStyle.iconsContainer}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={FooterStyle.img}
                src={instagram}
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={FooterStyle.img} src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className={FooterStyle.links}>
          <h5 className={FooterStyle.title}>Događanja u gradovima</h5>
          <a
            className={FooterStyle.link}
            href="https://www.infozagreb.hr/dogadanja#ne-propustite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zagreb
          </a>
          <a
            className={FooterStyle.link}
            href="https://www.dalmatia.hr/hr/kalendar-dogadanja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Split
          </a>
          <a
            className={FooterStyle.link}
            href="http://www.visitrijeka.hr/Sto_raditi/Kalendar_dogadanja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rijeka
          </a>
          <a
            className={FooterStyle.link}
            href="https://www.tzosijek.hr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Osijek
          </a>
        </div>
        <div className={FooterStyle.contact}>
          <h5 className={FooterStyle.title}>Kontakt</h5>
          <div className={FooterStyle.number}>
            <img className={FooterStyle.imgPhone} src={phone} alt="phone" />
            <p className={FooterStyle.numberP}>(021) 147-578</p>
          </div>
          <div className={FooterStyle.mail}>
            <img className={FooterStyle.imgMail} src={mail} alt="mail" />
            <p className={FooterStyle.mailP}>e-ulaznice@ulaz.com</p>
          </div>
        </div>
      </div>
      <p className={FooterStyle.copyright}>
        Napravljeno u sklopu kolegija Korisnička sučelja © 2019
      </p>
    </footer>
  )
}

export default Footer
